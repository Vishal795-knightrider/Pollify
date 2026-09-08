export default function Preview() {
  return (
    <section className="editorial-section" style={{ paddingTop: "10px", paddingBottom: "50px" }}>
      <div className="section-header-editorial">
        <span className="section-kicker">Stationery Scrapbook</span>
        <h2 className="section-heading-lg">
          Crafted for <em>effortless</em> engagement
        </h2>
        <p className="section-subtext">
          Every poll looks like a curated stationery card that fits naturally into team chats, social stories, and group threads.
        </p>
      </div>

      <div className="editorial-cards-grid">
        {/* Card 1: Team Check-in */}
        <div className="editorial-poll-card card-span-4 card-tilt-left">
          <div className="poll-card-top">
            <span className="summer-tag sage">Team Culture</span>
            <span className="live-indicator">
              <span className="live-pulse" />
              Active
            </span>
          </div>

          <h3 className="poll-card-question">
            Friday team wind-down: Outdoor park picnic or rooftop matcha?
          </h3>

          <div className="poll-card-options">
            <div className="poll-option-bar leading-winner">
              <div className="poll-bar-meta">
                <span>Outdoor sun picnic</span>
                <span className="poll-bar-pct">74%</span>
              </div>
              <div className="poll-track">
                <div className="poll-fill" style={{ width: "74%" }} />
              </div>
            </div>

            <div className="poll-option-bar">
              <div className="poll-bar-meta">
                <span>Rooftop matcha</span>
                <span className="poll-bar-pct">26%</span>
              </div>
              <div className="poll-track">
                <div className="poll-fill" style={{ width: "26%" }} />
              </div>
            </div>
          </div>

          <div className="poll-card-bottom">
            <span>48 votes • Design Team</span>
            <span style={{ color: "var(--sage-deep)", fontWeight: "700" }}>Decided</span>
          </div>
        </div>

        {/* Card 2: Product Launch Decision */}
        <div className="editorial-poll-card card-span-4">
          <div className="poll-card-top">
            <span className="summer-tag coral">Feature Launch</span>
            <span className="live-indicator">
              <span className="live-pulse" />
              Live
            </span>
          </div>

          <h3 className="poll-card-question">
            Should we release the new Summer Theme update this Thursday?
          </h3>

          <div className="poll-card-options">
            <div className="poll-option-bar leading-winner">
              <div className="poll-bar-meta">
                <span>Ship it immediately</span>
                <span className="poll-bar-pct">82%</span>
              </div>
              <div className="poll-track">
                <div className="poll-fill" style={{ width: "82%" }} />
              </div>
            </div>

            <div className="poll-option-bar">
              <div className="poll-bar-meta">
                <span>Polishing touches first</span>
                <span className="poll-bar-pct">18%</span>
              </div>
              <div className="poll-track">
                <div className="poll-fill" style={{ width: "18%" }} />
              </div>
            </div>
          </div>

          <div className="poll-card-bottom">
            <span>1,480 votes • Community</span>
            <span style={{ color: "var(--coral)", fontWeight: "700" }}>Voting now</span>
          </div>
        </div>

        {/* Card 3: Creative aesthetic question */}
        <div className="editorial-poll-card card-span-4 card-tilt-right">
          <div className="poll-card-top">
            <span className="summer-tag butter">Book Club</span>
            <span className="live-indicator">
              <span className="live-pulse" />
              Active
            </span>
          </div>

          <h3 className="poll-card-question">
            Next weekend read: Warm Japanese slice-of-life or cozy countryside mystery?
          </h3>

          <div className="poll-card-options">
            <div className="poll-option-bar leading-winner">
              <div className="poll-bar-meta">
                <span>Slice-of-life café novel</span>
                <span className="poll-bar-pct">63%</span>
              </div>
              <div className="poll-track">
                <div className="poll-fill" style={{ width: "63%" }} />
              </div>
            </div>

            <div className="poll-option-bar">
              <div className="poll-bar-meta">
                <span>Cozy countryside mystery</span>
                <span className="poll-bar-pct">37%</span>
              </div>
              <div className="poll-track">
                <div className="poll-fill" style={{ width: "37%" }} />
              </div>
            </div>
          </div>

          <div className="poll-card-bottom">
            <span>210 votes • Bookworm Guild</span>
            <span style={{ color: "var(--butter-tag)", fontWeight: "700" }}>3 hrs left</span>
          </div>
        </div>
      </div>
    </section>
  )
}