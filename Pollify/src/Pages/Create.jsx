import Navbar   from '../Components/Navbar.jsx'
import PollForm from '../Components/Pollform.jsx'

export default function Create({ isDark, onThemeToggle, onGoLanding, onGoCreate }) {
  return (
    <div className="create-page">
      <Navbar
        isDark={isDark}
        onToggleTheme={onThemeToggle}
        onCreateClick={onGoCreate}
        onLogoClick={onGoLanding}
      />
      <div className="create-hero">
        <h1>Create Your Poll</h1>
        <p>Simple, frictionless, and distraction-free polling.</p>
      </div>
      <div className="poll-form-wrap">
        <PollForm />
      </div>
    </div>
  )
}