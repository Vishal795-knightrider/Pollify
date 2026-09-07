import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar({ isDark, onToggleTheme, onCreateClick, onLogoClick }) {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleLogo(e) {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
    if (onLogoClick) {
      onLogoClick()
    } else {
      navigate("/")
    }
  }

  function handleCreate(e) {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
    if (onCreateClick) {
      onCreateClick()
    } else {
      navigate("/create")
    }
  }

  function handleSectionNav(e, anchorId) {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (window.location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        const el = document.getElementById(anchorId)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      const el = document.getElementById(anchorId)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="nav-wrapper">
        <nav className="nav-pill" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a className="nav-brand" href="/" onClick={handleLogo}>
            <div className="brand-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {/* Summer blossom / sunburst shape */}
                <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 2v3" />
                <path d="M12 19v3" />
                <path d="M2 12h3" />
                <path d="M19 12h3" />
                <path d="m4.93 4.93 2.12 2.12" />
                <path d="m16.95 16.95 2.12 2.12" />
                <path d="m16.95 7.05 2.12-2.12" />
                <path d="m4.93 19.07 2.12-2.12" />
              </svg>
            </div>
            <span className="brand-title">
              Pollify<span className="brand-dot">.</span>
            </span>
          </a>

          {/* Nav Links */}
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="/" onClick={handleLogo}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#explore" onClick={(e) => handleSectionNav(e, "explore")}>
                Explore
              </a>
            </li>
            <li>
              <a className="nav-link" href="#how-it-works" onClick={(e) => handleSectionNav(e, "how-it-works")}>
                How it works
              </a>
            </li>
            <li>
              <a className="nav-link" href="#faqs" onClick={(e) => handleSectionNav(e, "faqs")}>
                FAQ
              </a>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            <button
              className="theme-pill-btn"
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to daylight mode" : "Switch to twilight mode"}
              title={isDark ? "Switch to daylight mode" : "Switch to twilight mode"}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button className="btn-summer-primary" onClick={handleCreate}>
              <span>+ Create Poll</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="nav-brand" onClick={handleLogo}>
              <div className="brand-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>
              <span className="brand-title">Pollify.</span>
            </div>
            <button
              className="theme-pill-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <ul className="mobile-drawer-links">
            <li>
              <a href="/" onClick={handleLogo}>Home</a>
            </li>
            <li>
              <a href="#explore" onClick={(e) => handleSectionNav(e, "explore")}>Explore Polls</a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => handleSectionNav(e, "how-it-works")}>How it works</a>
            </li>
            <li>
              <a href="#faqs" onClick={(e) => handleSectionNav(e, "faqs")}>FAQ</a>
            </li>
          </ul>

          <div style={{ marginTop: "auto", paddingTop: "30px" }}>
            <button
              className="btn-summer-primary"
              style={{ width: "100%" }}
              onClick={handleCreate}
            >
              + Create a Poll
            </button>
          </div>
        </div>
      </div>
    </>
  )
}