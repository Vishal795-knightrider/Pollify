function LeftCard() {
  return (
    <div className="poll-card left">
      <div className="preview-label">Team Poll</div>
      <div className="preview-question preview-question--rotated">
        Best team lunch spot?
      </div>
      <div className="preview-options">
        <div className="preview-option muted">Sushi Bar</div>
        <div className="preview-option highlighted">Burger Joint</div>
      </div>
    </div>
  )
}

function MainCard() {
  return (
    <div className="poll-card main">
      <div className="poll-card-header">
        <span className="live-badge">
          <span className="live-dot" />
          LIVE RESULT
        </span>
        <span className="live-dot" />
      </div>

      <h3>Should we redesign the homepage?</h3>

      <div className="bar-row">
        <div className="bar-label">
          <span>Yes, it&apos;s time</span>
          <span className="pct">72%</span>
        </div>
        <div className="bar-track">
          <div className="bar-fill bar-fill--72" />
        </div>
      </div>

      <div className="bar-row">
        <div className="bar-label">
          <span>Keep it as is</span>
          <span className="pct-muted">28%</span>
        </div>
        <div className="bar-track">
          <div className="bar-fill secondary bar-fill--28" />
        </div>
      </div>

      <div className="poll-meta">
        <div className="poll-meta-left">
          <div className="avatars">
            <div className="avatar red">A</div>
            <div className="avatar blue">B</div>
            <div className="avatar green">C</div>
          </div>
          <span className="vote-count">1,248 VOTES</span>
        </div>
        <span className="vote-now">VOTE NOW</span>
      </div>
    </div>
  )
}

function RightCard() {
  return (
    <div className="poll-card right">
      <div className="preview-label">Quick Question</div>
      <div className="preview-question">Try dark mode integration?</div>
      <div className="preview-bar-track">
        <div className="preview-bar-fill" />
      </div>
      <div className="preview-pct">48%</div>
    </div>
  )
}

export default function Preview() {
  return (
    <div className="preview-area">
      <LeftCard />
      <MainCard />
      <RightCard />
    </div>
  )
}