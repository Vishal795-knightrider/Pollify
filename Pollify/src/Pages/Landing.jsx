import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar.jsx"
import Hero from "../Components/Hero.jsx"
import StatsSection from "../Components/StatsSection.jsx"
import ExplorePolls from "../Components/ExplorePolls.jsx"
import Preview from "../Components/Preview.jsx"
import Steps from "../Components/Steps.jsx"
import Features from "../Components/Features.jsx"
import Comparison from "../Components/Comparison.jsx"
import FAQ from "../Components/FAQ.jsx"
import CTA from "../Components/CTA.jsx"
import Footer from "../Components/Footer.jsx"

export default function Landing({ isDark, onThemeToggle }) {
  const navigate = useNavigate()

  function goToCreate() {
    navigate("/create")
  }

  return (
    <div className="landing-page">
      <Navbar
        isDark={isDark}
        onToggleTheme={onThemeToggle}
        onCreateClick={goToCreate}
      />

      <main>
        <Hero onGoCreate={goToCreate} />
        <StatsSection />
        <ExplorePolls onGoCreate={goToCreate} />
        <Preview />
        <Steps />
        <Features />
        <Comparison />
        <FAQ />
        <CTA onGoCreate={goToCreate} />
      </main>

      <Footer />
    </div>
  )
}