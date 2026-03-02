const STEPS = [
  {
    num: 1,
    title: 'Write your question',
    body: 'Type your question and options. No configuration needed—unless you want it.',
  },
  {
    num: 2,
    title: 'Share the link',
    body: 'Send a unique link to your team, customers, or community. They vote instantly.',
  },
  {
    num: 3,
    title: 'See live results',
    body: 'Watch the bars move in real-time. Export data or embed the results anywhere.',
  },
]

export default function Steps() {
  return (
    <section className="steps-section">
      <div className="section-title">Simple 3-step decision making</div>
      <p className="section-sub">
        No bloated features. No required logins. Just the shortest path between
        a question and an answer.
      </p>
      <div className="steps-grid">
        {STEPS.map(({ num, title, body }) => (
          <div className="step-card" key={num}>
            <div className="step-num">{num}</div>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}