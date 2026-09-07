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
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  function handleRemoveOption(index) {
    if (options.length <= 2) return
    setOptions(prev => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e) {
    if (e) e.preventDefault()
    if (!isValid || isSubmitting) return

    try {
      setIsSubmitting(true)
      const filteredOptions = options.filter(o => o.trim() !== "")

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
      console.error("Error creating poll:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="stationery-form-card">
      <div className="form-tape-accent" />

      {/* Form Group: Question */}
      <div className="stationery-form-group">
        <label className="stationery-label" htmlFor="poll-question-input">
          <span>The Question</span>
          <span className="label-badge">Step 1</span>
        </label>
        <input
          id="poll-question-input"
          className="stationery-input-question"
          type="text"
          placeholder="What would you like to ask?"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          autoFocus
        />
      </div>

      {/* Form Group: Options */}
      <div className="stationery-form-group">
        <label className="stationery-label">
          <span>Voting Choices</span>
          <span className="label-badge">Min. 2 options</span>
        </label>

        <div className="options-input-stack">
          {options.map((value, index) => (
            <div className="option-input-row" key={index}>
              <span className="option-num-pill">{index + 1}</span>
              <input
                className="option-text-field"
                type="text"
                placeholder={`Option ${index + 1}`}
                value={value}
                onChange={e => handleOptionChange(index, e.target.value)}
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => handleRemoveOption(index)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-soft)",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    padding: "4px"
                  }}
                  title="Remove option"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        <AddOptionButton onClick={handleAddOption} />
      </div>

      {/* Multiple Selection Switch */}
      <MultiToggle
        checked={multiSelect}
        onChange={e => setMultiSelect(e.target.checked)}
      />

      {/* Submit CTA Button */}
      <button
        type="button"
        className="btn-create-poll-submit"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? "Creating your poll card..." : "Publish Summer Poll 🌸"}
      </button>
    </div>
  )
}