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
    return (
      <h2 style={{ textAlign: "center", marginTop: 50 }}>
        Loading...
      </h2>
    )



  const total =
    poll.votes.reduce((a, b) => a + b, 0)



  return (

    <div
      style={{
        maxWidth: 600,
        margin: "80px auto",
        textAlign: "center",
        background: "#fff",
        padding: 30,
        borderRadius: 12
      }}
    >

      <h2>{poll.question}</h2>

      {/* =================== */}
      {/* BEFORE VOTE */}
      {/* =================== */}

      {!voted && poll.options.map((opt, i) => (

        <div
          key={i}
          onClick={() => setSelected(i)}
          style={{
            margin: "12px 0",
            padding: "12px",
            borderRadius: 8,
            border:
              selected === i
                ? "2px solid orange"
                : "1px solid #ccc",
            cursor: "pointer"
          }}
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
          onClick={submitVote}
          style={{
            marginTop: 20,
            padding: "12px",
            background: "#ff7a00",
            border: "none",
            color: "white",
            width: "100%",
            borderRadius: 8
          }}
        >
          Submit Vote →
        </button>

      )}



      {/* =================== */}
      {/* AFTER VOTE */}
      {/* =================== */}

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
            style={{
              margin: "12px 0",
              textAlign: "left"
            }}
          >

            <div>
              {opt} — {percent}%
            </div>

            <div
              style={{
                height: 10,
                background: "#ddd",
                borderRadius: 5,
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: percent + "%",
                  background: "#ff7a00",
                  height: "100%"
                }}
              />
            </div>

          </div>

        )

      })}


      {voted && (

        <div style={{ marginTop: 20 }}>

          Total votes: {total}

          <br /><br />

          <button
            onClick={() =>
              navigator.clipboard.writeText(
                window.location.href
              )
            }
          >
            Copy Link
          </button>

        </div>

      )}

    </div>

  )

}