import { useState } from "react"
import { useNavigate } from "react-router-dom"

const EXPLORE_CATEGORIES = [
  "All",
  "Weekend Vibes",
  "Design & Aesthetics",
  "Food & Dining",
  "Daily Debates"
]

const SAMPLE_POLLS = [
  {
    id: "exp-1",
    category: "Design & Aesthetics",
    categoryClass: "peach",
    question: "Should our brand redesign keep editorial serif typography or go full brutalist?",
    totalVotes: 1420,
    created: "2 hours ago",
    span: "card-span-8 card-tilt-left",
    tag: "Trending Today",
    options: [
      { text: "Editorial serif — timeless & warm", pct: 68, votes: 965 },
      { text: "Minimal neo-grotesque sans", pct: 24, votes: 341 },
      { text: "Playful retro display", pct: 8, votes: 114 }
    ]
  },
  {
    id: "exp-2",
    category: "Food & Dining",
    categoryClass: "butter",
    question: "The ultimate summer afternoon treat?",
    totalVotes: 890,
    created: "4 hours ago",
    span: "card-span-4 card-tilt-right",
    tag: "Community Pick",
    options: [
      { text: "Cold brew with vanilla sweet cream", pct: 54, votes: 480 },
      { text: "Iced matcha latte with oat milk", pct: 46, votes: 410 }
    ]
  },
  {
    id: "exp-3",
    category: "Daily Debates",
    categoryClass: "sage",
    question: "Camera on or camera off for morning casual syncs?",
    totalVotes: 3240,
    created: "Yesterday",
    span: "card-span-4 card-tilt-left",
    tag: "Popular Debate",
    options: [
      { text: "Camera off, let me sip tea in peace", pct: 72, votes: 2332 },
      { text: "Camera on, love seeing faces", pct: 28, votes: 908 }
    ]
  },
  {
    id: "exp-4",
    category: "Weekend Vibes",
    categoryClass: "coral",
    question: "Saturday morning plan of choice: Sleep in till noon or catch early sunlight at a local farmers market?",
    totalVotes: 2110,
    created: "1 day ago",
    span: "card-span-8 card-tilt-right",
    tag: "Weekend Choice",
    options: [
      { text: "Farmers market pastries & sunlight walk", pct: 61, votes: 1287 },
      { text: "Cozy bed, blackout curtains, zero alarms", pct: 39, votes: 823 }
    ]
  }
]

export default function ExplorePolls({ onGoCreate }) {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [userVotedState, setUserVotedState] = useState({})

  // Filter polls based on category and search
  const filteredPolls = SAMPLE_POLLS.filter(poll => {
    const matchesCategory =
      activeCategory === "All" || poll.category === activeCategory
    const matchesSearch =
      poll.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poll.options.some(opt => opt.text.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  function handleVoteCardOption(pollId, optIdx) {
    setUserVotedState(prev => ({
      ...prev,
      [pollId]: optIdx
    }))
  }

  return (
    <section id="explore" className="editorial-section">
      <div className="section-header-editorial">
        <span className="section-kicker">Discover Conversations</span>
        <h2 className="section-heading-lg">
          What is everyone <em>voting on?</em>
        </h2>
        <p className="section-subtext">
          Browse real opinions from communities around the world. Tap any card to test the vote.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="explore-controls">
        <div className="explore-search-wrap">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="explore-search-input"
            placeholder="Search polls by topic, question, or vibe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filter-bar">
          {EXPLORE_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Scrapbook Masonry Grid */}
      <div className="editorial-cards-grid">
        {filteredPolls.map((poll) => {
          const userVoted = userVotedState[poll.id] !== undefined
          return (
            <article key={poll.id} className={`editorial-poll-card ${poll.span}`}>
              <div>
                <div className="poll-card-top">
                  <span className={`summer-tag ${poll.categoryClass}`}>
                    {poll.category}
                  </span>
                  <span style={{ fontSize: "0.76rem", color: "var(--text-soft)", fontWeight: "600" }}>
                    {poll.tag}
                  </span>
                </div>

                <h3 className="poll-card-question">
                  {poll.question}
                </h3>

                <div className="poll-card-options">
                  {poll.options.map((opt, i) => {
                    const isSelected = userVotedState[poll.id] === i
                    return (
                      <div
                        key={i}
                        className={`poll-option-bar ${isSelected || (!userVoted && i === 0) ? "leading-winner" : ""}`}
                        onClick={() => handleVoteCardOption(poll.id, i)}
                        role="button"
                        tabIndex={0}
                        title="Click to select this answer"
                      >
                        <div className="poll-bar-meta">
                          <span>
                            {isSelected ? "✓ " : ""}{opt.text}
                          </span>
                          <span className="poll-bar-pct">{opt.pct}%</span>
                        </div>
                        <div className="poll-track">
                          <div className="poll-fill" style={{ width: `${opt.pct}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="poll-card-bottom">
                <span>{poll.totalVotes.toLocaleString()} votes • {poll.created}</span>
                <button
                  className="btn-vote-trigger"
                  onClick={onGoCreate}
                >
                  Create Similar ↗
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
