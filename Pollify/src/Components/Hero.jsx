export default function Hero({ onGoCreate }) {
  return (
    <div className="hero">
      <div className="badge">Frictionless Polling</div>
      <h1>
        Make decisions faster,<br />
        <span className="gradient-text">Not longer forms.</span>
      </h1>
      <p>
      Create interactive polls that people actually engage with.
      <span className="highlight">No signups.</span>
      — Just participation.
     </p>
      <button className="btn-dark" onClick={onGoCreate}>
      Start Polling Free
      </button>
    </div>
  )
}