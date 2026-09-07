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
          <span className="stat-label">Avg Decision Time</span>
          <span className="stat-number">12s</span>
          <span className="stat-trend">
            <span style={{ color: "var(--coral)" }}>⚡ Instant</span>
            <span style={{ color: "var(--text-soft)" }}>zero friction</span>
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Participation Rate</span>
          <span className="stat-number">98.6%</span>
          <span className="stat-trend">
            <span>🌸 5x higher</span>
            <span style={{ color: "var(--text-soft)" }}>than legacy forms</span>
          </span>
        </div>
      </div>
    </section>
  )
}
