import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"

import { db } from "../firebase"
import AddOptionButton from "./AddOptionButton.jsx"
import MultiToggle from "./MultiToggle.jsx"

export default function PollForm() {

  const navigate = useNavigate()

  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState(["", ""])
  const [multiSelect, setMultiSelect] = useState(false)

  const isValid =
    question.trim() !== "" &&
    options.filter(o => o.trim() !== "").length >= 2


  function handleOptionChange(index, value) {
    setOptions(prev =>
      prev.map((o, i) => (i === index ? value : o))
    )
  }


  function handleAddOption() {
    setOptions(prev => [...prev, ""])
  }


  async function handleSubmit() {

    try {

      const filteredOptions =
        options.filter(o => o.trim() !== "")

      const docRef = await addDoc(
        collection(db, "polls"),
        {
          question,
          options: filteredOptions,
          votes: filteredOptions.map(() => 0),
          multiSelect,
          createdAt: new Date()
        }
      )

      // ✅ direct open poll page
      navigate(`/poll/${docRef.id}`)

    } catch (error) {
      console.error(error)
    }

  }



  return (

    <div className="poll-form-card">

      <div className="form-group">
        <label className="form-label">
          The Question
        </label>

        <input
          className="form-input"
          type="text"
          placeholder="What would you like to ask?"
          value={question}
          onChange={e =>
            setQuestion(e.target.value)
          }
        />

      </div>



      <div className="form-group">

        <label className="form-label">
          Options
        </label>

        {options.map((value, index) => (

          <div
            className="option-input"
            key={index}
          >

            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={value}
              onChange={e =>
                handleOptionChange(
                  index,
                  e.target.value
                )
              }
            />

          </div>

        ))}

        <AddOptionButton
          onClick={handleAddOption}
        />

      </div>



      <MultiToggle
        checked={multiSelect}
        onChange={e =>
          setMultiSelect(
            e.target.checked
          )
        }
      />


      <button
        className="btn-submit"
        disabled={!isValid}
        onClick={handleSubmit}
      >
        Create Your Poll
      </button>

    </div>

  )

}