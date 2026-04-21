import "./CaseStudyDemiplane.css";
import demiplaneCover from "./assets/demiplane-logo.png";
import DemiplaneCaseStudy from "./assets/Demiplane Case Study.png";
import Demiplanebefore1 from "./assets/demiplane-before-1.png";
import Demiplaneafter1 from "./assets/demiplane-after-1.png";
import Demiplanebefore2 from "./assets/demiplane-before-2.png";
import Demiplaneafter2 from "./assets/demiplane-after-2.png"

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CaseStudyDemiplane({ onBack, onContact }) {
  return (
    <div className="page">
      <div className="navWrap">
        <nav className="nav">
          <a
            href="#"
            className="navLogo"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            Yaritza
          </a>

          <div className="navLinks">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
            >
              work
            </a>
            <a
              href="#dp-overview"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("dp-overview");
              }}
            >
              overview
            </a>
            <a
              href="#dp-problem"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("dp-problem");
              }}
            >
              problem
            </a>
            <a
              href="#dp-impact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("dp-impact");
              }}
            >
              impact
            </a>
          </div>

         <button className="btnBlack" onClick={onContact}>
  Let’s Talk!
</button>
        </nav>
      </div>

      <header className="cover">
        <div className="coverInner">
          <p className="coverKicker">UX/UI · Case Study</p>

          <h1 className="coverTitle">
            Making Character Creation
            <br />
            Clearer and More Accessible
          </h1>

          <p className="coverYear">Jan 2025 – Feb 2025</p>

          <div className="coverMeta">
            <span className="metaChip">🎲 Demiplane</span>
            <span className="metaChip">UX/UI Design</span>
            <span className="metaChip">Desktop</span>
          </div>

          <p className="coverSummary">
            Redesigning parts of Demiplane’s character creation experience to
            make progression clearer, surface missing steps, and improve overall
            usability for players navigating a complex rules-heavy flow.
          </p>
        </div>

        <div className="coverCard">
          <div className="coverImageWrap">
            <img
              src={DemiplaneCaseStudy}
              alt="Demiplane case study cover"
              className="coverImage"
            />
          </div>
        </div>
      </header>

      <section className="overview" id="dp-overview">
        <h2 className="sectionTitle">Overview</h2>

        <div className="overviewGrid">
          <div className="overviewRow">
            <span className="overviewLabel">Role</span>
            <div className="overviewContent">
              <p className="strong">UX/UI Designer</p>
              <p>
                UX Research, Wireframing, User Flows, Interaction Design,
                Accessibility, Visual Design
              </p>
            </div>
          </div>

          <div className="overviewRow">
            <span className="overviewLabel">Platform</span>
            <div className="overviewContent">
              <p>Desktop Web</p>
            </div>
          </div>

          <div className="overviewRow">
            <span className="overviewLabel">Timeline</span>
            <div className="overviewContent">
              <p>Jan 2025 – Feb 2025</p>
            </div>
          </div>

          <div className="overviewRow">
            <span className="overviewLabel">Tools</span>
            <div className="overviewContent">
              <p>Figma, User Research</p>
            </div>
          </div>

          <div className="overviewRow">
            <span className="overviewLabel">Summary</span>
            <div className="overviewContent">
              <p>
                During an evaluation of Demiplane’s character creation flow, I
                identified usability and accessibility gaps that affected both
                new and experienced players.
              </p>
              <p>
                The current experience made it difficult to understand what was
                missing, what steps still needed attention, and how rule-based
                choices impacted the final character.
              </p>
              <p>
                My goal was to make character creation feel clearer, more
                guided, and more approachable without removing the depth players
                expect from tabletop systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="dp-problem">
        <h2 className="sectionTitle">The Problem</h2>
        <p>
          Character creation is one of the most important parts of the tabletop
          RPG experience, but Demiplane’s current flow makes key decisions and
          missing requirements difficult to understand.
        </p>

        <ul className="list">
          <li>Missing requirements were not clearly explained to the user</li>
          <li>Important options were easy to overlook during progression</li>
          <li>Rules and preferences were not surfaced clearly during selection</li>
          <li>
            The interface created unnecessary cognitive load during a complex
            flow
          </li>
        </ul>

        <div className="callout">
          👉 The experience asked users to interpret what was missing instead of
          clearly guiding them forward.
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Problem Discovery</h2>

        <div className="twoCol">
          <div className="infoCard">
            <h3 className="stepTitle">Problem</h3>
            <p>
              During my evaluation, I identified key areas where the interface
              created friction. Important steps were easy to miss, and the lack
              of clear feedback forced players to guess what was preventing
              completion.
            </p>
          </div>

          <div className="infoCard">
            <h3 className="stepTitle">Proposed Solution</h3>
            <p>
              I focused on improving clarity through better visibility of
              missing requirements, stronger visual hierarchy, and clearer
              guidance around locked or unavailable choices.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Research</h2>

        <div className="twoCol">
          <div className="infoCard">
            <h3 className="stepTitle">Methods</h3>
            <p>
              To better understand the target audience, I reviewed Demiplane’s
              audience context, explored player expectations, and evaluated how
              different experience levels would interact with the character
              creation flow.
            </p>
          </div>

          <div className="infoCard">
            <h3 className="stepTitle">Findings</h3>
            <ul className="list">
              <li>No indicators for locked content</li>
              <li>Important rules were not visible enough</li>
              <li>Comprehensive filtering was lacking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Constructing the Player’s Perspective</h2>
        <p>
          To better empathize with users, I developed a persona representing a
          player who enjoys tabletop RPGs but may not have deep system mastery.
          This helped frame the flow through the lens of someone who is excited
          to build a character, but who can easily feel overwhelmed when
          requirements and options are not clearly surfaced.
        </p>
        <p>
          By grounding the redesign in that perspective, I was able to focus on
          improving guidance, reducing confusion, and making the overall
          experience feel more accessible and rewarding.
        </p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Design Goals</h2>

        <div className="impactGrid">
          <div className="impactCard blue">Clarify missing steps</div>
          <div className="impactCard yellow">Reduce cognitive load</div>
          <div className="impactCard pink">Improve visibility of locked content</div>
          <div className="impactCard blue">Support both new and experienced players</div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Solution</h2>

        <div className="step">
          <div className="stepNum">1</div>
          <div>
            <h3 className="stepTitle">Clearer Missing-State Feedback</h3>
            <p>
              I introduced more explicit feedback so users could understand what
              was missing and why their character sheet was not yet complete.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="stepNum">2</div>
          <div>
            <h3 className="stepTitle">Improved Filtering</h3>
            <p>
              I proposed clearer filtering and visibility for options tied to
              owned content, so players would not need to scan long alphabetical
              lists to find valid choices.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="stepNum">3</div>
          <div>
            <h3 className="stepTitle">Better Progress Guidance</h3>
            <p>
              I focused on making the flow feel more guided and less like a
              trial-and-error process by surfacing only the most relevant next
              actions.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="dp-impact">
        <h2 className="sectionTitle">Impact</h2>

        <div className="impactGrid">
          <div className="impactCard blue">
            ✅ Easier to understand incomplete states
          </div>
          <div className="impactCard yellow">
            ✅ Reduced guesswork during character creation
          </div>
          <div className="impactCard pink">
            ✅ Improved accessibility and visibility
          </div>
          <div className="impactCard blue">
            ✅ Better support for player decision-making
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Reflection</h2>
        <p>
          This project reinforced how important clarity is in complex,
          rules-heavy systems. Even highly engaged users can become frustrated
          when interfaces rely too much on hidden logic or unclear feedback.
        </p>
        <p>
          By treating missing states, filtering, and progression cues as core UX
          problems, I was able to design a more supportive experience that helps
          players stay focused on creativity instead of confusion.
        </p>
      </section>

      <div className="backWrap">
        <button className="btnGhost" onClick={onBack}>
          ← Back to Portfolio
        </button>
      </div>
    </div>
  );
}