export default function Navbar({ isDark, onToggleTheme, onCreateClick, onLogoClick }) {
  function handleLogoClick(e) {
    e.preventDefault()
    if (onLogoClick) onLogoClick()
  }

  return (
    <nav>
      <a className="nav-logo" href="#" onClick={handleLogoClick}>
        <div className="logo-icon">
          <span />
          <span />
          <span />
          <span />
        </div>
        Pollify
      </a>

      <div className="nav-right">
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="theme-icon sun">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f2620a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1"     x2="12" y2="3"     />
              <line x1="12" y1="21"    x2="12" y2="23"    />
              <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1"  y1="12"    x2="3"  y2="12"    />
              <line x1="21" y1="12"    x2="23" y2="12"    />
              <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"  />
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
            </svg>
          </span>
          <span className="theme-icon moon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8edf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>
        </button>

        <button className="btn-create" onClick={onCreateClick}>
          + Create
        </button>
      </div>
    </nav>
  )
}