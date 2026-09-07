import Navbar from "../Components/Navbar.jsx"
import PollForm from "../Components/Pollform.jsx"
import Footer from "../Components/Footer.jsx"

export default function Create({ isDark, onThemeToggle, onGoLanding, onGoCreate }) {
  return (
    <div className="create-page-wrapper">
      <Navbar
        isDark={isDark}
        onToggleTheme={onThemeToggle}
        onCreateClick={onGoCreate}
        onLogoClick={onGoLanding}
      />

      <main className="create-page-split">
        {/* Left Column: Expressive Visual Editorial Heading & Supporting Stationery */}
        <div className="create-left-studio">
          <span className="summer-tag coral" style={{ marginBottom: "20px" }}>
            ✦ Studio Mode
          </span>

          <h1 className="create-studio-heading">
            Ask something.<br />
            See what people <em>really think.</em>
          </h1>

          <p className="create-studio-desc">
            Whether it’s dinner spots, creative debates, product roadmaps, or weekend adventures—publish your question in seconds and watch the live votes roll in.
          </p>

          <div className="studio-note-widget">
            <div className="note-header">
              <span>🌻 Creator Tips</span>
            </div>
            <ul>
              <li>Keep questions punchy and conversational</li>
              <li>Add between 2 to 6 balanced options</li>
              <li>Toggle multiple selection for preference polls</li>
              <li>Your link is created instantly—no account needed</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Physical Summer Stationery Card Form */}
        <div className="create-right-form">
          <PollForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}