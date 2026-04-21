import styles from "./CaseStudyBoA.module.css";
import bofaProblem from "./assets/bofa-problem.png";
import bofaChanges from "./assets/bofachanges.png";
import bofaThumbnail from "./assets/BankofAmericaThumbnail.png";

const FIGMA_PROTOTYPE = "https://www.figma.com/proto/ztYvUh6Z9b6XeGuVTSpCvG/Untitled?page-id=0%3A1&node-id=3-4&viewport=277%2C24%2C0.12&t=1BiW8HDAM0TLWrVE-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3%3A4";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CaseStudyBoA({ onBack, onContact }) {
  return (
    <div className={styles.page}>

      {/* NAV */}
      <div className={styles.navWrap}>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLogo} onClick={(e) => { e.preventDefault(); onBack(); }}>
            Yaritza
          </a>
          <div className={styles.navLinks}>
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>work</a>
            <a href="#cs-overview" onClick={(e) => { e.preventDefault(); scrollTo("cs-overview"); }}>overview</a>
            <a href="#cs-approach" onClick={(e) => { e.preventDefault(); scrollTo("cs-approach"); }}>approach</a>
            <a href="#cs-impact"   onClick={(e) => { e.preventDefault(); scrollTo("cs-impact"); }}>impact</a>
          </div>
          <button className={styles.btnBlack} onClick={onContact}>
            Let's Talk!
          </button>
        </nav>
      </div>

      {/* COVER */}
      <header className={styles.cover}>
        <div className={styles.coverInner}>
          <p className={styles.coverKicker}>Salesforce · Case Study</p>
          <h1 className={styles.coverTitle}>
            Improving Visibility & Compliance with a Conditional Salesforce Action
          </h1>
          <p className={styles.coverYear}>2025 – 2026</p>
          <div className={styles.coverMeta}>
            <span className={styles.metaChip}>🏦 Bank of America</span>
            <span className={styles.metaChip}>UX Design + Engineering</span>
            <span className={styles.metaChip}>Internal Tool</span>
          </div>
          <p className={styles.coverSummary}>
            Designing and implementing a more predictable internal workflow by controlling when a
            compliance-related action appears, who can access it, and how it behaves across desktop and mobile.
          </p>
        </div>
        <div className={styles.coverCard}>
          <div className={styles.coverImageWrap}>
            <img src={bofaThumbnail} alt="Bank of America Salesforce workflow preview" className={styles.coverImage} />
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className={styles.overview} id="cs-overview">
        <h2 className={styles.sectionTitle}>Overview</h2>
        <div className={styles.overviewGrid}>

          <div className={styles.overviewRow}>
            <span className={styles.overviewLabel}>Role</span>
            <div className={styles.overviewContent}>
              <p className={styles.strong}>UX Designer + Software Engineer</p>
              <p>UX Design, UI Design, User Flows, Salesforce Development, Testing, Documentation, Cross-functional Collaboration</p>
            </div>
          </div>

          <div className={styles.overviewRow}>
            <span className={styles.overviewLabel}>Platform</span>
            <div className={styles.overviewContent}><p>Salesforce (Lightning Experience)</p></div>
          </div>

          <div className={styles.overviewRow}>
            <span className={styles.overviewLabel}>Timeline</span>
            <div className={styles.overviewContent}><p>2025 – 2026</p></div>
          </div>

          <div className={styles.overviewRow}>
            <span className={styles.overviewLabel}>Status</span>
            <div className={styles.overviewContent}><p>Shipped to internal users</p></div>
          </div>

          <div className={styles.overviewRow}>
            <span className={styles.overviewLabel}>Deliverables</span>
            <div className={styles.overviewContent}>
              <p className={styles.strong}>Design</p>
              <p>User Flows, UI Improvements, Interaction Design</p>
              <p className={styles.strong} style={{ marginTop: 8 }}>Development</p>
              <p>Salesforce Configuration, Dynamic Actions, Flow Logic</p>
            </div>
          </div>

          <div className={styles.overviewRow}>
            <span className={styles.overviewLabel}>Summary</span>
            <div className={styles.overviewContent}>
              <p>I worked on improving an internal Salesforce workflow used to document client interactions and ensure compliance with internal policies.</p>
              <p>The existing experience relied on complex terminology and form-heavy inputs, making it difficult for users to understand what was required.</p>
              <p>My goal was to simplify the experience, improve clarity, and reduce friction while maintaining compliance requirements.</p>
            </div>
          </div>

        </div>
        <div className={styles.disclaimer}>
          ⚠️ Due to the confidential nature of this project, visuals have been recreated to reflect the experience without exposing sensitive information.
        </div>
      </section>

      {/* PROBLEM IMAGE */}
      <div className={styles.fullImgWrap}>
        <img src={bofaProblem} alt="Salesforce interface before improvements" className={styles.fullImg} />
      </div>

      {/* THE PROBLEM */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Problem</h2>
        <p>Bankers were seeing or not seeing a key action inconsistently.</p>
        <ul className={styles.list}>
          <li>Some users who should not have access were seeing the button</li>
          <li>Others who needed it could not find it</li>
          <li>On mobile, the button appeared for everyone regardless of permissions</li>
          <li>Reverse Solicitation relied on less intuitive input patterns that created unnecessary confusion</li>
        </ul>
        <div className={styles.callout}>
          👉 From a UX perspective, the system failed to answer: <strong>"Why can I or can't I do this?"</strong>
        </div>
      </section>

      {/* MY ROLE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Role</h2>
        <p>I worked as a Salesforce developer, collaborating with senior developers, QA testers, and business stakeholders. I was responsible for:</p>
        <ul className={styles.list}>
          <li>Implementing visibility logic</li>
          <li>Debugging inconsistencies across environments</li>
          <li>Ensuring the experience aligned with business rules</li>
        </ul>
      </section>

      {/* THE APPROACH */}
      <section className={styles.section} id="cs-approach">
        <h2 className={styles.sectionTitle}>The Approach</h2>
        <ul className={styles.list}>
          <li>Defined clear visibility rules based on user persona, region, and record conditions</li>
          <li>Implemented conditional logic using Dynamic Actions in Lightning App Builder</li>
          <li>Simplified Reverse Solicitation input to a clear Yes/No decision</li>
          <li>Debugged inconsistencies across desktop and mobile environments</li>
          <li>Aligned permission sets with intended user roles across sandbox and QA</li>
        </ul>
      </section>

      {/* CHANGES IMAGE */}
      <div className={styles.fullImgWrap}>
        <img src={bofaChanges} alt="Salesforce interface after improvements" className={styles.fullImg} />
      </div>

      {/* IMPACT */}
      <section className={styles.section} id="cs-impact">
        <h2 className={styles.sectionTitle}>Impact</h2>
        <div className={styles.impactGrid}>
          <div className={`${styles.impactCard} ${styles.blue}`}>✅ Reduced user confusion</div>
          <div className={`${styles.impactCard} ${styles.yellow}`}>✅ Improved compliance with business rules</div>
          <div className={`${styles.impactCard} ${styles.pink}`}>✅ Increased trust in system behavior</div>
          <div className={`${styles.impactCard} ${styles.blue}`}>✅ Prevented incorrect action usage</div>
          <div className={`${styles.impactCard} ${styles.yellow}`}>✅ Simplified Reverse Solicitation with a clearer Yes/No decision</div>
        </div>
      </section>

      {/* KEY INSIGHT */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key UX Insight</h2>
        <div className={`${styles.callout} ${styles.calloutBlue}`}>
          <p><strong>Visibility is communication.</strong> If a system shows or hides actions incorrectly, users lose confidence quickly.</p>
          <p style={{ marginTop: 8 }}>Design is not just visuals — it is ensuring the system behaves predictably and transparently.</p>
        </div>
      </section>

      {/* WHAT I'D IMPROVE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What I'd Improve Next</h2>
        <ul className={styles.list}>
          <li>Add inline explanations ("This action is only available for X users in Y region")</li>
          <li>Provide <strong>disabled states</strong> instead of hiding completely, so users better understand why something is unavailable</li>
          <li>Improve <strong>mobile parity</strong> to ensure a more consistent UX across devices</li>
        </ul>
      </section>

      {/* TLDR */}
      <section className={styles.section}>
        <div className={styles.tldr}>
          <span className={styles.tldrLabel}>TL;DR</span>
          <p>I designed and implemented a conditional action system in Salesforce that improved visibility, reduced confusion, and enforced compliance by ensuring only the right users could access a key feature.</p>
        </div>
      </section>

      {/* PROTOTYPE + BACK BUTTONS */}
      <div className={styles.backWrap}>
        <a
          href={FIGMA_PROTOTYPE}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrototype}
        >
          See Prototype Here →
        </a>
        <button className={styles.btnGhost} onClick={onBack}>
          ← Back to Portfolio
        </button>
      </div>

    </div>
  );
}