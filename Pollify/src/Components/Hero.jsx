import { useState } from "react"

export default function Hero({ onGoCreate }) {
  // Interactive mock voting in hero for instant playful tactile feel!
  const [selectedHeroOpt, setSelectedHeroOpt] = useState(0)
  const [heroVotes, setHeroVotes] = useState([74, 26])

  function handleMockVote(index) {
    if (index === selectedHeroOpt) return
    setSelectedHeroOpt(index)
    if (index === 0) {
      setHeroVotes([78, 22])
    } else {
      setHeroVotes([31, 69])
    }
  }

  function handleScrollToExplore(e) {
    e.preventDefault()
    const el = document.getElementById("explore")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="editorial-hero">
      {/* Left Column: Asymmetrical Editorial Copy & Actions */}
      <div className="hero-content">
        <div className="hero-tag-wrap">
          <span className="summer-tag coral">
            Fresh & Frictionless Polling
          </span>
          <span className="summer-tag butter">Zero Signups Required</span>
        </div>

        <h1 className="hero-title">
          Ask something <em>honest.</em><br />
          Gather thoughts in the <span className="title-accent">summer breeze.</span>
        </h1>

        <p className="hero-desc">
          Say goodbye to clunky enterprise survey forms. Pollify turns everyday decisions,
          creative debates, and team check-ins into <strong>delightful, real-time stationery cards</strong> that people actually love answering.
        </p>

        <div className="hero-actions">
          <button className="btn-summer-primary" onClick={onGoCreate}>
            <span>Create a Poll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <a href="#explore" className="btn-summer-secondary" onClick={handleScrollToExplore}>
            <span>Explore Polls</span>
            <span style={{ fontSize: "1.1rem" }}>↓</span>
          </a>
        </div>

        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true">
            <div className="mini-avatar av-1">A</div>
            <div className="mini-avatar av-2">R</div>
            <div className="mini-avatar av-3">S</div>
            <div className="mini-avatar av-4">M</div>
          </div>
          <p className="proof-text">
            <strong>12,400+ instant votes</strong> cast today with zero friction.
          </p>
        </div>
      </div>

      {/* Right Column: Visual Summer Stationery Composition */}
      <div className="hero-visual">
        <div className="composition-container">
          {/* Decorative Daisy in background */}
          <svg className="deco-flower flower-1" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="14" fill="#F3CA52" />
            <circle cx="50" cy="22" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="50" cy="78" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="22" cy="50" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="78" cy="50" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="30" cy="30" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="70" cy="30" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="30" cy="70" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
            <circle cx="70" cy="70" r="12" fill="#FAF6F0" stroke="#EDE2D4" strokeWidth="2" />
          </svg>

          {/* Floating Summer Stickers */}
          <div className="floating-badge badge-top-right">
            <span>Hot Take</span>
          </div>

          <div className="floating-badge badge-bottom-left">
            <span>Picnic Debate</span>
          </div>

          {/* Main Summer Stationery Poll Card */}
          <div className="stationery-card hero-main-card">
            <div className="washi-tape" />

            <div className="card-header-bar">
              <span className="live-indicator">
                <span className="live-pulse" />
                LIVE VOTE
              </span>
              <span className="card-stamp">#042 • SUMMER EDITION</span>
            </div>

            <h3 className="card-question">
              Golden hour picnic: What is the non-negotiable must-have?
            </h3>

            {/* Interactive Mock Options */}
            <div className="interactive-options">
              <div
                className={`mock-option-row ${selectedHeroOpt === 0 ? "active" : ""}`}
                onClick={() => handleMockVote(0)}
                role="button"
                tabIndex={0}
              >
                <div className="mock-label-group">
                  <span>Fresh sourdough & salted butter</span>
                  <span className="mock-pct">{heroVotes[0]}%</span>
                </div>
                <div className="mock-bar-bg">
                  <div className="mock-bar-fill" style={{ width: `${heroVotes[0]}%` }} />
                </div>
              </div>

              <div
                className={`mock-option-row ${selectedHeroOpt === 1 ? "active" : ""}`}
                onClick={() => handleMockVote(1)}
                role="button"
                tabIndex={0}
              >
                <div className="mock-label-group">
                  <span>Iced peach spritz with mint</span>
                  <span className="mock-pct">{heroVotes[1]}%</span>
                </div>
                <div className="mock-bar-bg">
                  <div className="mock-bar-fill" style={{ width: `${heroVotes[1]}%` }} />
                </div>
              </div>
            </div>

            <div className="card-footer-meta">
              <span className="card-total-votes">
                892 community votes
              </span>
              <span className="card-action-cue">
                Click option to test
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}