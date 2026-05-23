import "./App.css";

function App() {
  return (
    <main className="portfolio">
      {/* NAVBAR */}

      <nav className="navbar">
        <h3 className="logo">Kai Wen Yuan</h3>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <p className="hero-tag">
          UI/UX DESIGN • FRONTEND DEVELOPMENT
        </p>

        <h1>Kai Wen Yuan</h1>

        <p className="hero-text">
          Designing modern interfaces focused on clarity,
          usability, and visual communication.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#about" className="secondary-btn">
            About Me
          </a>
        </div>
      </section>

      {/* ABOUT */}

      <section className="intro-card" id="about">
        <div className="intro-text full-width">
          <h2>About Me</h2>

          <p>
            I am a UI/UX and frontend development student at
            the University of Ottawa currently learning visual
            communication, React, HTML, CSS, JavaScript, and
            user interface design principles through SEG3125.
          </p>
        </div>
      </section>

      {/* HOW I WORK */}

<section className="section" id="work">
  <h2>How I Work</h2>

  <p>
    I am currently taking SEG3125 at the University of
    Ottawa, where I am learning UI/UX design principles,
    visual communication, and frontend development.
  </p>

  <p>
    Through this course, I am exploring how typography,
    color, spacing, and responsive design affect user
    experience while continuing to improve my web
    development skills.
  </p>

  <p>
    Reference:
    <a
      href="https://www.nngroup.com/"
      target="_blank"
      rel="noreferrer"
      className="reference-link"
    >
      Nielsen Norman Group (NN/g)
    </a>
  </p>
</section>

      {/* PROJECTS */}

      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-world"></i>
            </div>

            <h3>Service Website</h3>

            <p>Design 1</p>

            <span>Coming Soon</span>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-device-gamepad-2"></i>
            </div>

            <h3>Memory Game</h3>

            <p>Design 2</p>

            <span>Coming Soon</span>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-shopping-cart"></i>
            </div>

            <h3>E-Commerce Site</h3>

            <p>Design 3</p>

            <span>Coming Soon</span>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-chart-bar"></i>
            </div>

            <h3>Analytics Dashboard</h3>

            <p>Design 4</p>

            <span>Coming Soon</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <p>© 2026 Kai Wen Yuan Portfolio</p>
      </footer>
    </main>
  );
}

export default App;