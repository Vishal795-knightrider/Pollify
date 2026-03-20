export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-line" />

      <div className="footer-content">

        <div className="footer-left">

          <div className="footer-logo">
            <span className="logo-bars">
              <span />
              <span />
              <span />
              <span />
            </span>

            Pollify
          </div>

          <p className="footer-copy">
            © 2026 Pollify — Real-time polling web app
          </p>

        </div>


        <div className="footer-center">

          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>

        </div>


        <div className="footer-right">

          <a
            href="https://github.com/Vishal795-knightrider"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

        </div>

      </div>

    </footer>
  )
}