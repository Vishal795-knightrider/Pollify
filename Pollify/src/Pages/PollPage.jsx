import Navbar from "../Components/Navbar.jsx"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  doc,
  onSnapshot,
  updateDoc
} from "firebase/firestore"

import { db } from "../firebase"

export default function PollPage() {

  const { id } = useParams()

  const [poll, setPoll] = useState(null)
  const [selected, setSelected] = useState(null)
  const [voted, setVoted] = useState(false)


  // realtime load
  useEffect(() => {

    const ref = doc(db, "polls", id)

    const unsub = onSnapshot(ref, (snap) => {

      if (snap.exists()) {

        const data = snap.data()

        const votes =
          data.votes ||
          data.options.map(() => 0)

        setPoll({
          ...data,
          votes
        })

      }

    })

    return () => unsub()

  }, [id])



  async function submitVote() {

    if (selected === null) {
      alert("Select one option")
      return
    }

    const ref = doc(db, "polls", id)

    const newVotes = [...poll.votes]

    newVotes[selected] += 1

    await updateDoc(ref, {
      votes: newVotes
    })

    setVoted(true)

  }



  if (!poll)
    return <h2 className="loading">Loading...</h2>



  const total =
    poll.votes.reduce((a, b) => a + b, 0)



  return (

    <>

      {/* NAVBAR */}

      <Navbar
        isDark={false}
        onToggleTheme={() => {}}
        onCreateClick={() => window.location.href = "/create"}
      />


      <div className="poll-page">

        <div className="poll-result-card">


          {/* header */}

          <div className="poll-header">

            <div className="live-badge">
              LIVE RESULTS
            </div>

            <div className="total-votes-top">
              {total} TOTAL VOTES
            </div>

          </div>



          {/* title */}

          <h2 className="poll-title">
            {poll.question}
          </h2>



          {/* BEFORE VOTE */}

          {!voted && poll.options.map((opt, i) => (

            <div
              key={i}
              className={
                selected === i
                  ? "poll-option selected"
                  : "poll-option"
              }
              onClick={() => setSelected(i)}
            >

              <input
                type="radio"
                checked={selected === i}
                readOnly
              />

              {opt}

            </div>

          ))}



          {!voted && (

            <button
              className="vote-btn"
              onClick={submitVote}
            >
              Submit Vote →
            </button>

          )}



          {/* AFTER VOTE */}

          {voted && poll.options.map((opt, i) => {

            const percent =
              total === 0
                ? 0
                : Math.round(
                    (poll.votes[i] / total) * 100
                  )

            return (

              <div
                key={i}
                className="result-row"
              >

                <div className="result-label">

                  <span>{opt}</span>

                  <span>{percent}%</span>

                </div>


                <div className="result-bar">

                  <div
                    className="result-fill"
                    style={{
                      width: percent + "%"
                    }}
                  />

                </div>

              </div>

            )

          })}



          {/* SHARE */}

          {voted && (

            <div className="share-box">

              <button
                className="copy-btn"
                onClick={() =>
                  navigator.clipboard.writeText(
                    window.location.href
                  )
                }
              >
                Copy Link
              </button>


              <button
                className="share-btn"
                onClick={() =>
                  window.open(
                    "https://twitter.com/intent/tweet?url=" +
                    window.location.href
                  )
                }
              >
                Twitter
              </button>


              <button
                className="share-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/?text=" +
                    window.location.href
                  )
                }
              >
                WhatsApp
              </button>

            </div>

          )}


        </div>

      </div>

    </>

  )

}