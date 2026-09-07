const STEPS = [
  {
    num: "1",
    sealClass: "seal-1",
    title: "Write your question",
    body: "Type your query and options. Add as many choices as you want. Zero signup walls or settings bloat.",
    accent: "🌸 ~10 seconds"
  },
  {
    num: "2",
    sealClass: "seal-2",
    title: "Share your stationery link",
    body: "Send your beautiful unique link into WhatsApp, Twitter, Slack, or group chats. Friends vote with a single tap.",
    accent: "💌 1-click share"
  },
  {
    num: "3",
    sealClass: "seal-3",
    title: "Watch live results bloom",
    body: "See the animated infographic percentages shift in real-time as votes come pouring in without page reloads.",
    accent: "✨ Instant realtime"
  },
]

export default function Steps() {
  return (
    <section id="how-it-works" className="editorial-section">
      <div className="section-header-editorial">
        <span className="section-kicker">Simple 3-Step Recipe</span>
        <h2 className="section-heading-lg">
          The shortest path between a <em>question</em> and an answer
        </h2>
        <p className="section-subtext">
          No bloated admin forms, no passwords to forget. Just pure, delightful interaction.
        </p>
      </div>

      <div className="steps-cards-row">
        {STEPS.map(({ num, sealClass, title, body, accent }) => (
          <div className="recipe-step-card" key={num}>
            <div className={`step-seal ${sealClass}`}>
              {num}
            </div>
            <h4>{title}</h4>
            <p>{body}</p>
            <div style={{ marginTop: "18px", fontSize: "0.82rem", fontWeight: "700", color: "var(--coral)" }}>
              {accent}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}