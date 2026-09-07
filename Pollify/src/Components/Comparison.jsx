const ROWS = [
  { feature: "Creation Time", traditional: "~3–5 minutes of setup", pollify: "~10 seconds flat ⚡" },
  { feature: "Voter Friction", traditional: "Mandatory logins & emails", pollify: "Zero friction, tap & vote 🌸" },
  { feature: "Visual Identity", traditional: "Sterile grey spreadsheet", pollify: "Warm summer editorial card ✨" },
  { feature: "Live Results", traditional: "Manual dashboard refresh", pollify: "Real-time animated bars 📊" },
  { feature: "Mobile Flow", traditional: "Tiny cramped inputs", pollify: "Touch-first responsive delight 📱" },
]

export default function Comparison() {
  return (
    <section className="editorial-section">
      <div className="section-header-editorial">
        <span className="section-kicker">Side-By-Side</span>
        <h2 className="section-heading-lg">
          Why people choose <em>Pollify</em>
        </h2>
        <p className="section-subtext">
          Traditional survey forms feel like doing taxes. Pollify feels like writing a postcard.
        </p>
      </div>

      <div className="editorial-comparison-card">
        <div className="comparison-table-head">
          <span>Dimension</span>
          <span>Traditional Forms</span>
          <span>Pollify Summer 2.0</span>
        </div>
        {ROWS.map(({ feature, traditional, pollify }) => (
          <div className="comparison-table-row" key={feature}>
            <span>{feature}</span>
            <span>{traditional}</span>
            <span>{pollify}</span>
          </div>
        ))}
      </div>
    </section>
  )
}