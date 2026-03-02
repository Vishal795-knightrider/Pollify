import { useState, useRef, useEffect } from 'react'
import Landing from './pages/Landing.jsx'
import Create from './pages/Create.jsx'

export default function App() {
  const [page, setPage] = useState('landing') // 'landing' | 'create'
  const [isDark, setIsDark] = useState(false)
  const rippleRef = useRef(null)

  // Apply / remove dark-mode class on <body> whenever isDark changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
  }, [isDark])

  /**
   * Triggers the circular ripple animation that expands from the toggle button,
   * then flips the dark mode state halfway through so the transition feels seamless.
   *
   * @param {React.MouseEvent} e - Click event from the theme toggle button
   */
  function handleThemeToggle(e) {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const ripple = rippleRef.current
    if (!ripple) return

    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const maxDist = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    )
    const size = maxDist * 2.2

    // Position & size the ripple disk, centered on the button
    Object.assign(ripple.style, {
      width: size + 'px',
      height: size + 'px',
      left: cx - size / 2 + 'px',
      top: cy - size / 2 + 'px',
      transform: 'scale(0)',
      opacity: '1',
      transition:
        'transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease 0.65s',
    })

    const goingDark = !isDark
    ripple.className = goingDark ? 'to-dark' : 'to-light'

    // Force reflow so the reset above is painted before we start the animation
    void ripple.offsetWidth
    ripple.classList.add('expanding')

    // Switch theme halfway through the ripple
    setTimeout(() => setIsDark(goingDark), 300)

    // Fade out the ripple after it has fully expanded
    setTimeout(() => ripple.classList.add('done'), 650)

    // Clean up all classes so the ripple is ready for the next click
    setTimeout(() => {
      ripple.className = ''
      ripple.style.transform = 'scale(0)'
      ripple.style.opacity = '1'
    }, 900)
  }

  function goToCreate() {
    setPage('create')
    window.scrollTo(0, 0)
  }

  function goToLanding() {
    setPage('landing')
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Ripple overlay – rendered once at the root so it overlays everything */}
      <div id="theme-ripple" ref={rippleRef} />

      {page === 'landing' ? (
        <Landing
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          onGoCreate={goToCreate}
        />
      ) : (
        <Create
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          onGoLanding={goToLanding}
          onGoCreate={goToCreate}
        />
      )}
    </>
  )
}