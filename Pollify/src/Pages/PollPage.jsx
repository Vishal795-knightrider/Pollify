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


  // submit vote
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

  }



  if (!poll)
    return (
      <h2 style={{ textAlign: "center", marginTop: 50 }}>
        Loading...
      </h2>
    )



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


      {poll.options.map((opt, i) => (

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
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10
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


      <button
        onClick={submitVote}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          background: "#ff7a00",
          border: "none",
          color: "white",
          cursor: "pointer",
          borderRadius: 8,
          width: "100%",
          fontSize: 16
        }}
      >
        Submit Vote →
      </button>


    </div>

  )

}