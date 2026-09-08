const COMPARISONS = [
  {
    number: "01",
    topic: "Creation",
    traditional: "Multi-step configuration, mandatory account setup, and settings menus.",
    pollify: "Type your question, add choices, and share your link in seconds."
  },
  {
    number: "02",
    topic: "Voting",
    traditional: "Sign-in gates, captchas, and long form fields that cause voter drop-off.",
    pollify: "One-tap voting with zero friction and complete anonymity.",
    highlight: true
  },
  {
    number: "03",
    topic: "Experience",
    traditional: "Sterile, generic survey layouts that feel like administration paperwork.",
    pollify: "Warm stationery-inspired cards that look natural in chats and feeds."
  },
  {
    number: "04",
    topic: "Results",
    traditional: "Static spreadsheets and private dashboards requiring manual refreshes.",
    pollify: "Live tallies that animate seamlessly as votes arrive in real time."
  },
  {
    number: "05",
    topic: "Mobile",
    traditional: "Dense, form-heavy desktop pages shrunken down for phone screens.",
    pollify: "Designed touch-first for quick decisions on any handheld screen."
  }
]

export default function Comparison() {
  return (
    <section className="editorial-section">
      <div className="section-header-editorial">
        <span className="section-kicker">The Difference</span>
        <h2 className="section-heading-lg">
          Polling should feel <em>this simple.</em>
        </h2>
        <p className="section-subtext">
          Less setup. Less friction. More people actually voting.
        </p>
      </div>

      <div className="editorial-diff-ledger">
        {COMPARISONS.map(({ number, topic, traditional, pollify, highlight }) => (
          <div
            key={number}
            className={`diff-ledger-item ${highlight ? "diff-item-tinted" : ""}`}
          >
            <div className="diff-topic-block">
              <span className="diff-number">{number}</span>
              <h3 className="diff-topic-title">{topic}</h3>
            </div>

            <div className="diff-columns-group">
              <div className="diff-col diff-traditional">
                <span className="diff-label">Traditional forms</span>
                <p className="diff-desc">{traditional}</p>
              </div>

              <div className="diff-connector" aria-hidden="true">
                <span className="diff-connector-line" />
              </div>

              <div className="diff-col diff-pollify">
                <span className="diff-label">Pollify</span>
                <p className="diff-desc">{pollify}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}