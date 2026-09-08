export default function StatsSection() {
  return (
    <section className="editorial-section" style={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <div className="stats-banner">
        <div className="stat-box">
          <span className="stat-label">Total Votes Cast</span>
          <span className="stat-number">18,429</span>
          <span className="stat-trend">
            <span>↑ 24%</span>
            <span style={{ color: "var(--text-soft)" }}>vs yesterday</span>
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Polls Active</span>
          <span className="stat-number">3,812</span>
          <span className="stat-trend">
            <span>↑ 12%</span>
            <span style={{ color: "var(--text-soft)" }}>new today</span>
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Avg Response Time</span>
          <span className="stat-number">12s</span>
          <span className="stat-trend">
            <span style={{ color: "var(--coral)" }}>Real-time</span>
            <span style={{ color: "var(--text-soft)" }}>immediate sync</span>
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Voter Accessibility</span>
          <span className="stat-number">100%</span>
          <span className="stat-trend">
            <span style={{ color: "var(--sage-deep)" }}>No signups</span>
            <span style={{ color: "var(--text-soft)" }}>direct one-tap voting</span>
          </span>
        </div>
      </div>
    </section>
  )
}
