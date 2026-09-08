export default function CTA({ onGoCreate }) {
  return (
    <div className="summer-cta-container">
      <div className="summer-cta-card">
        <span className="summer-tag coral" style={{ marginBottom: "18px" }}>
          Ready in seconds
        </span>

        <h2 className="cta-heading">
          Ready to ask your <em>community?</em>
        </h2>

        <p className="cta-desc">
          Gather honest opinions on dinner spots, design directions, or team decisions in seconds.
          No credit card, no sign-up wall, just answers.
        </p>

        <button className="btn-summer-primary" style={{ padding: "14px 34px", fontSize: "1.06rem" }} onClick={onGoCreate}>
          <span>Create your first poll →</span>
        </button>

        <div className="cta-perk-row">
          <span className="cta-perk-pill">
            No Login Required
          </span>
          <span className="cta-perk-pill">
            Unlimited Free Polls
          </span>
          <span className="cta-perk-pill">
            Real-time Firestore Sync
          </span>
        </div>
      </div>
    </div>
  )
}