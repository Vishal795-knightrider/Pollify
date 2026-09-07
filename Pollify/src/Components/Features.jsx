const FEATURES = [
  {
    key: "realtime",
    iconClass: "icon-coral",
    title: "Real-time updates",
    body: "Powered by live Firebase listeners. Watch results animate seamlessly the second someone clicks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    key: "anonymous",
    iconClass: "icon-sage",
    title: "Anonymous & Honest",
    body: "No email harvesting, no intrusive trackers. Voters give their genuine opinions freely.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    key: "nologin",
    iconClass: "icon-butter",
    title: "Zero login required",
    body: "Create polls instantly. Voters never hit an account roadblock or CAPTCHA fatigue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="18" y1="11" x2="23" y2="6" />
      </svg>
    ),
  },
  {
    key: "mobile",
    iconClass: "icon-peach",
    title: "Editorial Mobile-first",
    body: "Looks like a bespoke indie magazine on iOS, Android, tablets, and wide desktop screens.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    key: "share",
    iconClass: "icon-lavender",
    title: "One-touch sharing",
    body: "Optimized share buttons for Twitter/X, WhatsApp, and instant clipboard copy with toast feedback.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    key: "stationery",
    iconClass: "icon-coral",
    title: "Summer aesthetic",
    body: "Warm ivory textures, pastel badges, and editorial typography make your questions stand out anywhere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="editorial-section">
      <div className="section-header-editorial">
        <span className="section-kicker">Thoughtful Details</span>
        <h2 className="section-heading-lg">
          Everything you need,<br />
          <em>nothing you don’t.</em>
        </h2>
        <p className="section-subtext">
          Built for clarity, speed, and genuine human connection without enterprise bloat.
        </p>
      </div>

      <div className="editorial-features-grid">
        {FEATURES.map(({ key, title, body, icon, iconClass }) => (
          <div className="editorial-feature-box" key={key}>
            <div className={`feature-icon-pill ${iconClass}`}>
              {icon}
            </div>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}