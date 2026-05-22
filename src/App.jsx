import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <h3 className="logo">Kevin Yuan</h3>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Kevin Yuan</h1>
        <p>UI/UX Portfolio</p>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>

        <p>
          I am a student at the University of Ottawa currently learning UI/UX
          design, visual communication, and frontend development.
        </p>

        <p>
          My goal is to create interfaces that are visually clear, organized,
          and user-friendly while continuing to improve my frontend development
          skills.
        </p>
      </section>

      <section className="section" id="work">
        <h2>How I Work</h2>

        <p>
          I focus on clean layouts, readability, visual hierarchy, and
          user-centered design.
        </p>

        <p>
          Throughout this course I am exploring HTML, CSS, JavaScript, React,
          and Bootstrap while applying visual communication principles into my
          projects.
        </p>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>Service Website</h3>
            <p>Design 1</p>
            <span>Coming Soon</span>
          </div>

          <div className="card">
            <h3>Memory Game</h3>
            <p>Design 2</p>
            <span>Coming Soon</span>
          </div>

          <div className="card">
            <h3>E-Commerce Site</h3>
            <p>Design 3</p>
            <span>Coming Soon</span>
          </div>

          <div className="card">
            <h3>Analytics Dashboard</h3>
            <p>Design 4</p>
            <span>Coming Soon</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Kevin Yuan Portfolio</p>
      </footer>
    </main>
  );
}

export default App;