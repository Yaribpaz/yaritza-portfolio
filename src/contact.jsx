import "./contact.css";

export default function Contact({ onBack }) {
  return (
    <div className="contact-page">

      {/* NAV — same pill style as homepage */}
      <div className="contact-nav-wrap">
        <nav className="contact-nav">
          <a href="#" className="contact-nav-logo" onClick={(e) => { e.preventDefault(); onBack(); }}>
            Yaritza
          </a>
          <div className="contact-nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>work</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>about</a>
          </div>
          <button className="contact-btn-black" onClick={onBack}>
            ← Back
          </button>
        </nav>
      </div>

      {/* CONTENT */}
      <section className="contact-section">
        <h1 className="contact-title">
          Let's <span className="contact-hl">Talk</span> ✨
        </h1>
        <p className="contact-subtitle">
          Interested in working together? I’m all ears.
        </p>

        <div className="contact-grid">

          {/* EMAIL */}
          <div className="contact-card contact-card-blue">
            <p className="contact-card-label">Email</p>
            <a href="mailto:yaritzab99@gmail.com" className="contact-link">
              📧 yaritzab99@gmail.com
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="contact-card contact-card-pink">
            <p className="contact-card-label">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/yaritza-bustamante/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              🔗 yaritza-bustamante
            </a>
          </div>

        </div>

        <div className="contact-note">
I don’t ghost — you’ll hear from me soon ✨        </div>

      </section>
    </div>
  );
}