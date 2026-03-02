export default function CTA({ onGoCreate }) {
  return (
    <div className="cta-block">
      <h2>
        Ready to start<br />
        <span>polling?</span>
      </h2>
      <p>
        Join thousands of teams making faster, better decisions every day
        with Pollify. No friction, just results.
      </p>
      <button className="btn-create btn-create--large" onClick={onGoCreate}>
        Create your first poll →
      </button>
      <div className="cta-perks">
        <span>No Login Required</span>
        <span>Unlimited Free Polls</span>
      </div>
    </div>
  )
}