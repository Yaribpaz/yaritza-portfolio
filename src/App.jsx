import { useState, useEffect, useRef } from "react";
import "./App.css";
import CaseStudyBoA from "./CaseStudyBoA";
import CaseStudyDemiplane from "./CaseStudyDemiplane";
import Contact from "./contact";
import bankOfAmericaThumbnail from "./assets/BankofAmericaThumbnail.png";
import DemiplaneCaseStudy from "./assets/Demiplane Case Study.png";

// ── Scroll reveal ──
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05 }
    );
    setTimeout(() => els.forEach((el) => obs.observe(el)), 100);
    return () => obs.disconnect();
  }, []);
}

// ── FAQ with spring animation ──
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const rafRef = useRef(null);
  const velRef = useRef(0);
  const posRef = useRef(0);

  useEffect(() => {
    const stiffness = 500;
    const damping = 16;
    const mass = 1;
    const target = open ? bodyRef.current.scrollHeight : 0;
    cancelAnimationFrame(rafRef.current);

    function tick() {
      const force = -stiffness * (posRef.current - target);
      const dampF = -damping * velRef.current;
      const acc = (force + dampF) / mass;
      velRef.current += acc * 0.016;
      posRef.current += velRef.current * 0.016;
      if (
        Math.abs(posRef.current - target) < 0.5 &&
        Math.abs(velRef.current) < 0.5
      ) {
        posRef.current = target;
        bodyRef.current.style.height = `${target}px`;
        return;
      }
      bodyRef.current.style.height = `${posRef.current}px`;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [open]);

  return (
    <div
      className={`faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <span>{q}</span>
        <div className="faq-icon">+</div>
      </div>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden" }}>
        <div className="faq-answer">{a}</div>
      </div>
    </div>
  );
}

// ── Project card ──
function ProjCard({ bg, logoContent, logoDark, brand, tag, title, role, desc, onClick, image, imageAlt }) {
  return (
    <div
      className={`proj-card ${bg}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="proj-info">
        <div className="proj-brand">
          <div className={`proj-logo ${logoDark ? "dark" : ""}`}>{logoContent}</div>
          <span className="proj-brand-name">{brand}</span>
        </div>
        <div className="proj-tag">{tag}</div>
        <h3 className="proj-title">{title}</h3>
        <div className="proj-role">{role}</div>
        <p className="proj-desc">{desc}</p>
        <button
          className="btn-see"
          onClick={(e) => { e.stopPropagation(); onClick?.(); }}
        >
          See Project
        </button>
      </div>
      <div className="proj-screen">
        {image ? (
          <img src={image} alt={imageAlt || brand} className="proj-image" />
        ) : (
          "Add screenshot"
        )}
      </div>
    </div>
  );
}

// ── Work card ──
function WorkCard({ color, date, title, desc }) {
  return (
    <div className={`work-card ${color}`}>
      <div className="work-circle" />
      <div className="work-date">{date}</div>
      <h3 className="work-title">{title}</h3>
      <hr className="work-divider" />
      <p className="work-desc">{desc}</p>
    </div>
  );
}

// ── Expertise pill ──
function Pill({ children, delay }) {
  return (
    <span className="pill reveal" style={{ transitionDelay: `${delay}s` }}>
      {children}
    </span>
  );
}

// ── Smooth scroll helper ──
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ── Main App ──
export default function App() {
 const [page, setPage] = useState(() => sessionStorage.getItem("page") || "home");
  useReveal();

function goToBoA() {
  window.scrollTo({ top: 0, behavior: "instant" });
  sessionStorage.setItem("page", "boa");
  setPage("boa");
}

function goToDemiplane() {
  window.scrollTo({ top: 0, behavior: "instant" });
  sessionStorage.setItem("page", "demiplane");
  setPage("demiplane");
}

function goToContact() {
  window.scrollTo({ top: 0, behavior: "instant" });
  sessionStorage.setItem("page", "contact");
  setPage("contact");
}

function goBack() {
  sessionStorage.setItem("page", "home");
  setPage("home");
  setTimeout(() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, 80);
}

function goHome() {
  sessionStorage.setItem("page", "home");
  setPage("home");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

  if (page === "boa")       return <CaseStudyBoA      onBack={goBack} onContact={goToContact} />;
  if (page === "demiplane") return <CaseStudyDemiplane onBack={goBack} onContact={goToContact} />;
  if (page === "contact")   return <Contact            onBack={goHome} />;

  return (
    <div className="app-shell">

      {/* NAV */}
      <nav className="nav">
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          Yaritza
        </a>
        <div className="nav-links">
          <a href="#projects"   onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>work</a>
          <a href="#about"      onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>about</a>
          <a href="#faq"        onClick={(e) => { e.preventDefault(); scrollTo("faq"); }}>faq</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}>resume</a>
        </div>
        <button className="btn-black nav-cta" onClick={goToContact}>
          Let's Talk!
        </button>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-left">
          <div className="avail">
            <span className="avail-dot" />
            Available for hire
          </div>
          <p className="hero-kicker">UX/UI Designer • Front-End Developer</p>
          <h1 className="hero-title">
            Hi, I&apos;m <span className="hl">Yaritza</span> —
            <br />
            I design thoughtful digital experiences.
          </h1>
          <p className="hero-sub">
            Bridging design and development to create intuitive, user-centered
            experiences with clarity, accessibility, and polish.
          </p>
          <div className="hero-btns">
            <button className="btn-black" onClick={goToContact}>Let's Talk!</button>
            <button className="btn-ghost hero-link-btn" onClick={() => scrollTo("projects")}>
              See my Portfolio
            </button>
          </div>
          <div className="hero-loc">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            New York, New York
          </div>
        </div>
      </header>

      {/* FEATURED PROJECTS */}
      <section className="sec" id="projects">
        <div className="reveal">
          <span className="chip">Featured Projects</span>
        </div>
        <div className="reveal" style={{ transitionDelay: "0.08s" }}>
          <ProjCard
            bg="pink"
            logoContent="🏦"
            brand="Bank of America"
            tag="Full-Time | Desktop"
            title="Action Visibility Optimization"
            role="UX Design | Software Engineer"
            desc="Improving user experience by ensuring actions appear only when relevant, reducing confusion and errors."
            onClick={goToBoA}
            image={bankOfAmericaThumbnail}
            imageAlt="Bank of America Salesforce project preview"
          />
        </div>
        <div className="reveal" style={{ transitionDelay: "0.16s" }}>
          <ProjCard
            bg="blue"
            logoContent="D"
            logoDark
            brand="Demiplane"
            tag="Case Study | Desktop"
            title="Character Building"
            role="UX & UI Design"
            desc="Improving the flow of character creation by focusing on content visibility and clarifying missing steps."
            onClick={goToDemiplane}
            image={DemiplaneCaseStudy}
            imageAlt="Demiplane character builder preview"
          />
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="sec" id="expertise">
        <div className="reveal">
          <span className="chip">My Expertise</span>
        </div>
        <div className="pills">
          {[
            "UX / UI Design", "UX Research", "Wireframing", "Prototyping",
            "User Flows", "Usability", "Accessibility", "User-Centered Design",
            "HTML", "CSS", "JavaScript", "Salesforce (Flows, LWC)",
            "Git", "VS Code", "Figma", "Adobe Creative Suite", "Copilot",
          ].map((t, i) => (
            <Pill key={t} delay={i * 0.05}>{t}</Pill>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="sec" id="experience">
        <div className="reveal">
          <span className="chip">My Working Experience</span>
        </div>
        <div className="reveal" style={{ transitionDelay: "0.06s" }}>
          <WorkCard color="blue" date="2025 - Present" title="Software Engineer at Bank of America"
            desc="I improved user experience by implementing conditional UI logic and dynamic actions, reducing user confusion and manual errors. Increased efficiency of internal workflows by automating processes with Flows and validation logic." />
        </div>
        <div className="reveal" style={{ transitionDelay: "0.12s" }}>
          <WorkCard color="yellow" date="2025" title="Software Engineer Intern at Bank of America"
            desc="I completed Salesforce Trailhead modules, strengthening knowledge in Apex, Lightning Web Components, and Visual Studio Code. Collaborated with developers and participated in sprint meetings." />
        </div>
        <div className="reveal" style={{ transitionDelay: "0.18s" }}>
          <WorkCard color="pink" date="2019 - 2021" title="Office Administrator at Mavi Inc."
            desc="I managed over 2 years of business documents and implemented a new organizational strategy, resolving 50+ issues using QuickBooks, Acrobat, and Outlook while improving consistency and confidence in bookkeeping." />
        </div>
        <div className="reveal" style={{ transitionDelay: "0.24s" }}>
          <WorkCard color="blue" date="2017 - 2018" title="Graphic Design Intern at Midtown Comics"
            desc="I created engaging graphics for online campaigns and social media, increasing engagement by 20%." />
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec" id="about">
        <div className="reveal">
          <span className="chip">About Me</span>
        </div>
        <div className="about-wrap">
          <div className="about-text reveal" style={{ transitionDelay: "0.18s" }}>
            <p>Hello! I&apos;m Yaritza — a UX Designer and Front-End Developer based in New York City.</p>
            <p>Born and raised in Queens, I grew up surrounded by culture, great food, and a lot of different perspectives — which is a big part of how I approach design today.</p>
            <p>When I&apos;m not designing or coding, I&apos;m probably deep in a Dungeons &amp; Dragons or Pathfinder campaign, reading a romance novel, or catching up on manga, manhua, or manhwa.</p>
            <p>I also live in what is basically a small zoo — three dogs (Salchi-Papa, Yoshi, and Dr. Samwise-Cannoli Esquire) and my cat Mochi.</p>
            <p>I care a lot about creating digital experiences that feel clear, inclusive, and genuinely enjoyable — not just functional.</p>
            <button className="btn-black" onClick={goToContact}>Let&apos;s talk →</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="reveal">
          <span className="chip">FAQ</span>
        </div>
        <FaqItem q="What tools & technology do you use?"
          a="I primarily design using Figma for wireframing, prototyping, and design systems. I also have a frontend background working with HTML, CSS, and JavaScript, which helps me create designs that are realistic and developer-friendly." />
        <FaqItem q="What is your design process like?"
          a="Discovery first. I start by deeply understanding users and goals, then move through wireframing, prototyping, and iterative testing before final delivery." />
        <FaqItem q="What type of work are you looking for?"
          a="I'm currently seeking opportunities in UX/UI or Product Design where I can contribute to building intuitive, user-centered digital experiences and continue growing as a designer." />
        <FaqItem q="How do you approach accessibility and usability?"
          a="I prioritize clear layouts, readable typography, and intuitive interactions. I aim to design experiences that are inclusive and easy to navigate for all users, considering accessibility best practices from the start." />
      </section>

      {/* FOOTER */}
      <footer className="footer-cta">
        <h2>Thoughtful design, made with a little love ♡</h2>
        <button className="btn-yellow" onClick={goToContact}>Let&apos;s Talk! →</button>
        <div className="footer-bar">
          <span>© 2026 Yaritza. All rights reserved.</span>
          <span>Built with ♥ in New York City</span>
        </div>
      </footer>

    </div>
  );
}