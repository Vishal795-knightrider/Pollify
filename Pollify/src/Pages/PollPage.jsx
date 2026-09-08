import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"

import { db } from "../firebase"
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"

export default function PollPage({ isDark, onThemeToggle }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const [poll, setPoll] = useState(null)
  const [selected, setSelected] = useState(null)
  const [selectedMulti, setSelectedMulti] = useState([])
  const [voted, setVoted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showSparkle, setShowSparkle] = useState(false)

  // Realtime load from Firestore
  useEffect(() => {
    const ref = doc(db, "polls", id)
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        const votes = data.votes || data.options.map(() => 0)
        setPoll({
          ...data,
          votes
        })
      }
    })
    return () => unsub()
  }, [id])

  function handleOptionClick(index) {
    if (poll?.multiSelect) {
      setSelectedMulti(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setSelected(index)
    }
  }

  async function submitVote() {
    if (poll?.multiSelect) {
      if (selectedMulti.length === 0) {
        alert("Please select at least one option to vote")
        return
      }
    } else {
      if (selected === null) {
        alert("Please select an option to vote")
        return
      }
    }

    try {
      const ref = doc(db, "polls", id)
      const newVotes = [...poll.votes]

      if (poll?.multiSelect) {
        selectedMulti.forEach(idx => {
          newVotes[idx] += 1
        })
      } else {
        newVotes[selected] += 1
      }

      await updateDoc(ref, {
        votes: newVotes
      })

      setVoted(true)
      setShowSparkle(true)
      setTimeout(() => setShowSparkle(false), 3000)
    } catch (err) {
      console.error("Error submitting vote:", err)
      alert("Failed to submit vote. Please try again.")
    }
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  if (!poll) {
    return (
      <div className="poll-page-wrapper">
        <Navbar
          isDark={isDark}
          onToggleTheme={onThemeToggle}
          onCreateClick={() => navigate("/create")}
        />
        <div className="loading-summer">
          <svg className="loading-flower-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            <path d="m4.93 4.93 2.12 2.12M16.95 16.95 2.12 2.12M16.95 7.05 2.12-2.12M4.93 19.07 2.12-2.12" />
          </svg>
          <span>Gathering thoughts in real-time...</span>
        </div>
      </div>
    )
  }

  const total = poll.votes.reduce((a, b) => a + b, 0)
  const maxVoteCount = Math.max(...poll.votes)

  return (
    <div className="poll-page-wrapper">
      <Navbar
        isDark={isDark}
        onToggleTheme={onThemeToggle}
        onCreateClick={() => navigate("/create")}
      />

      <main className="poll-view-wrap">
        <div className="poll-interactive-stationery">
          {/* Header Bar */}
          <div className="poll-view-header">
            <span className="live-indicator">
              <span className="live-pulse" />
              {voted ? "LIVE RESULTS" : "CAST YOUR VOTE"}
            </span>

            <span className="summer-tag butter">
              {total} Total Votes
            </span>
          </div>

          {/* Question */}
          <h1 className="poll-view-title">
            {poll.question}
          </h1>

          {/* Sparkle banner notification when just voted */}
          {showSparkle && (
            <div style={{
              background: "var(--butter)",
              color: "var(--butter-tag)",
              border: "1.5px solid rgba(243, 202, 82, 0.5)",
              borderRadius: "var(--radius-sm)",
              padding: "12px 18px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "700",
              fontSize: "0.92rem",
              animation: "floatBubble 1.5s ease"
            }}>
              <span>Thank you! Your vote has been recorded in the live tally.</span>
            </div>
          )}

          {/* PRE-VOTE VIEW */}
          {!voted && (
            <>
              <div className="voting-options-list">
                {poll.options.map((opt, i) => {
                  const isChecked = poll.multiSelect
                    ? selectedMulti.includes(i)
                    : selected === i

                  return (
                    <div
                      key={i}
                      className={`vote-choice-row ${isChecked ? "is-selected" : ""}`}
                      onClick={() => handleOptionClick(i)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                    >
                      <div className="custom-radio" aria-hidden="true">
                        <div className="custom-radio-dot" />
                      </div>

                      <span className="vote-choice-label">
                        {opt}
                      </span>
                    </div>
                  )
                })}
              </div>

              <button
                type="button"
                className="btn-submit-vote-summer"
                onClick={submitVote}
              >
                <span>Submit Vote</span>
                <span style={{ fontSize: "1.2rem" }}>→</span>
              </button>
            </>
          )}

          {/* POST-VOTE INFOGRAPHIC RESULTS VIEW */}
          {voted && (
            <>
              <div className="results-infographic-list">
                {poll.options.map((opt, i) => {
                  const percent = total === 0 ? 0 : Math.round((poll.votes[i] / total) * 100)
                  const isLeader = maxVoteCount > 0 && poll.votes[i] === maxVoteCount

                  return (
                    <div
                      key={i}
                      className={`result-infographic-card ${isLeader ? "winner" : ""}`}
                    >
                      <div className="result-card-top">
                        <div className="result-option-name">
                          <span>{opt}</span>
                          {isLeader && (
                            <span className="winner-badge-pill">
                              Leading Option
                            </span>
                          )}
                        </div>

                        <span className="result-big-pct">
                          {percent}%
                        </span>
                      </div>

                      <div className="result-progress-track">
                        <div
                          className="result-progress-bar"
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      <div className="result-card-footer">
                        <span>{poll.votes[i]} {poll.votes[i] === 1 ? "vote" : "votes"}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Share Box */}
              <div className="share-stationery-box">
                <span className="share-label-title">
                  Share this poll:
                </span>

                <div className="share-actions-group">
                  <button
                    type="button"
                    className="btn-share-pill btn-copy"
                    onClick={handleCopyLink}
                  >
                    <span>{copied ? "Copied Link!" : "Copy Link"}</span>
                  </button>

                  <button
                    type="button"
                    className="btn-share-pill"
                    onClick={() =>
                      window.open(
                        "https://twitter.com/intent/tweet?url=" +
                        encodeURIComponent(window.location.href) +
                        "&text=" +
                        encodeURIComponent(`Vote on this poll: "${poll.question}"`)
                      )
                    }
                  >
                    <span>Twitter / X</span>
                  </button>

                  <button
                    type="button"
                    className="btn-share-pill"
                    onClick={() =>
                      window.open(
                        "https://wa.me/?text=" +
                        encodeURIComponent(`Vote on: ${poll.question} ${window.location.href}`)
                      )
                    }
                  >
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}