export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-box">

        {/* LEFT */}
        <div className="footer-left">

          <span className="logo-bars">
            <span />
            <span />
            <span />
            <span />
          </span>

          <span className="footer-brand">
            Pollify
          </span>

        </div>


        {/* CENTER */}
        <div className="footer-center">

          <a href="#">Twitter</a>

          <a href="https://linkedin.com" target="_blank">
            LinkedIn
          </a>

          <a
            href="https://github.com/Vishal795-knightrider"
            target="_blank"
          >
            GitHub
          </a>

        </div>


        {/* RIGHT */}
        <div className="footer-right">

          © 2026 Pollify

        </div>

      </div>

    </footer>
  )
}