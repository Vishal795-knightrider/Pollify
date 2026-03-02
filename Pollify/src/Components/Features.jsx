const FEATURES = [
  {
    key: 'realtime',
    title: 'Real-time results',
    body: 'Watch the bars move as votes come in live.',
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    key: 'anonymous',
    title: 'Anonymous voting',
    body: 'Privacy first. No tracking, just opinions.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    key: 'nologin',
    title: 'No login required',
    body: 'Zero friction. Voters click and go.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="18" y1="11" x2="23" y2="6" />
      </svg>
    ),
  },
  {
    key: 'mobile',
    title: 'Mobile-first design',
    body: 'Beautifully optimized for any screen size.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    key: 'share',
    title: 'Share anywhere',
    body: 'One link to rule them all. SMS, X, or Slack.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="18" cy="5"  r="3" />
        <circle cx="6"  cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section>
      <div className="section-label">Powerful Features</div>
      <div className="section-title">
        Everything you need,<br />nothing you don&apos;t.
      </div>
      <div className="features-grid">
        {FEATURES.map(({ key, title, body, icon }) => (
          <div className="feature-card" key={key}>
            <div className="feature-icon">{icon}</div>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}