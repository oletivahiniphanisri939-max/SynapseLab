import { useState } from "react";
import "./App.css";
import NeuronGraph from "./NeuronGraph";
import BDHModule from "./BDHModule";

function App() {
  const INITIAL_MEMORY = {
    MEOW: 0.8,
    BARK: 0.2,
  };

  const [memory, setMemory] = useState(INITIAL_MEMORY);

  const [learningRate, setLearningRate] = useState(0.1);
  const [conflictCount, setConflictCount] = useState(0);
  const [page, setPage] = useState("home");

  const [message, setMessage] = useState(
    "The system currently favors Association A."
  );

  const [history, setHistory] = useState([
    {
      step: 0,
      meow: 0.8,
      bark: 0.2,
    },
  ]);

  // --------------------------------------------------
  // MEMORY UPDATE
  // --------------------------------------------------

  const recordHistory = (newMemory) => {
    setHistory((previous) => [
      ...previous,
      {
        step: previous.length,
        meow: newMemory.MEOW,
        bark: newMemory.BARK,
      },
    ]);
  };

  const teachMeow = () => {
    const newMemory = {
      MEOW: Math.min(memory.MEOW + learningRate, 1),
      BARK: Math.max(memory.BARK - learningRate, 0),
    };

    setMemory(newMemory);
    recordHistory(newMemory);

    setMessage(
      `Association A strengthened. MEOW: ${newMemory.MEOW.toFixed(
        2
      )}`
    );
  };

  const teachBark = () => {
    const newMemory = {
      MEOW: Math.max(memory.MEOW - learningRate, 0),
      BARK: Math.min(memory.BARK + learningRate, 1),
    };

    setMemory(newMemory);
    recordHistory(newMemory);

    setConflictCount((previous) => previous + 1);

    setMessage(
      `Conflicting evidence introduced. BARK: ${newMemory.BARK.toFixed(
        2
      )}`
    );
  };

  // --------------------------------------------------
  // PREDICTION
  // --------------------------------------------------

  const predict = () => {
    if (memory.MEOW > memory.BARK) {
      setMessage(
        "Expected association: A | Model: A | Match — memory remains dominant."
      );
    } else if (memory.BARK > memory.MEOW) {
      setMessage(
        "Expected association: A | Model: B | Interference detected."
      );
    } else {
      setMessage(
        "Expected association: A | Model: uncertain | The memory state is balanced."
      );
    }
  };

  // --------------------------------------------------
  // RESET
  // --------------------------------------------------

  const reset = () => {
    setMemory(INITIAL_MEMORY);
    setConflictCount(0);

    setHistory([
      {
        step: 0,
        meow: 0.8,
        bark: 0.2,
      },
    ]);

    setMessage("Experiment reset to the initial memory state.");
  };

  // --------------------------------------------------
  // INTERFERENCE SCORE
  // --------------------------------------------------

  const interferenceScore = Math.max(
    0,
    Math.min(
      1,
      (memory.BARK - 0.2) / 0.8
    )
  );

  const dominantAssociation =
    memory.MEOW > memory.BARK
      ? "Association A"
      : memory.BARK > memory.MEOW
      ? "Association B"
      : "Uncertain";

  // --------------------------------------------------
  // HOME
  // --------------------------------------------------

  const renderHome = () => (
    <main className="page-content">

      <section className="hero-section">

        <div className="eyebrow">
          INTERACTIVE AI RESEARCH EXPLAINER
        </div>

        <h2>
          Synaptic Plasticity
          <br />
          as Short-Term Memory
        </h2>

        <p className="hero-description">
          Explore how rapidly changing connection strengths can
          represent recent associations — and how conflicting
          information can interfere with that memory.
        </p>

        <div className="claim-panel">

          <span className="claim-label">
            CENTRAL CLAIM
          </span>

          <p>
            Temporary changes in synaptic strength can represent
            recent information, but repeated conflicting evidence
            can change which association dominates.
          </p>

        </div>

        <button
          className="primary-button"
          onClick={() => setPage("experiment")}
        >
          Run the experiment
        </button>

      </section>

      <section className="concept-grid">

        <div className="concept-card">
          <span className="card-number">01</span>

          <h3>Encode</h3>

          <p>
            A recent association temporarily changes the strength
            of a connection.
          </p>
        </div>

        <div className="concept-card">
          <span className="card-number">02</span>

          <h3>Interfere</h3>

          <p>
            New information that conflicts with the existing
            association changes the relative strengths.
          </p>
        </div>

        <div className="concept-card">
          <span className="card-number">03</span>

          <h3>Retrieve</h3>

          <p>
            The stronger connection determines the current
            predicted association in this toy system.
          </p>
        </div>

      </section>

    </main>
  );

  // --------------------------------------------------
  // LEARN
  // --------------------------------------------------

  const renderLearn = () => (
    <main className="page-content">

      <section className="section-header">

        <div className="eyebrow">
          CONCEPT
        </div>

        <h2>
          What is synaptic plasticity?
        </h2>

        <p>
          Synaptic plasticity describes changes in the strength
          of connections between neurons. In computational models,
          changing connection values can provide a mechanism for
          representing information over time.
        </p>

      </section>

      <section className="learning-section">

        <div className="learning-block">

          <span className="section-index">
            01
          </span>

          <div>
            <h3>Association</h3>

            <p>
              Suppose a system has learned that a particular
              input is associated with one outcome. The connection
              representing that association becomes relatively strong.
            </p>
          </div>

        </div>

        <div className="learning-block">

          <span className="section-index">
            02
          </span>

          <div>
            <h3>Conflicting evidence</h3>

            <p>
              Now introduce a second, conflicting association.
              In our simplified model, the new evidence strengthens
              one connection while reducing the relative strength
              of the previous one.
            </p>
          </div>

        </div>

        <div className="learning-block">

          <span className="section-index">
            03
          </span>

          <div>
            <h3>Interference</h3>

            <p>
              As conflicting examples accumulate, the original
              association may lose dominance. This gives us a
              measurable way to observe memory interference.
            </p>
          </div>

        </div>

      </section>

      <section className="mechanism-panel">

        <div className="panel-header">

          <div>
            <span className="eyebrow">
              MODEL MECHANISM
            </span>

            <h3>
              What changes during learning?
            </h3>
          </div>

          <span className="toy-label">
            TOY MODEL
          </span>

        </div>

        <div className="equation">

          w<sub>A</sub> ← w<sub>A</sub> + η

        </div>

        <p>
          Here, <strong>w</strong> represents connection strength
          and <strong>η</strong> represents the learning rate.
          The actual SynapseLab implementation uses a simplified
          bounded update rule so the learner can directly observe
          the effect.
        </p>

      </section>

      <section className="bdh-section">

        <BDHModule />

      </section>

      <section className="limitation-panel">

        <span className="eyebrow">
          IMPORTANT LIMITATION
        </span>

        <h3>
          This is not a biological brain simulation.
        </h3>

        <p>
          SynapseLab is an educational abstraction. It isolates
          changing connection strength and interference so that
          the underlying idea can be observed directly. It does
          not reproduce the full dynamics of biological neurons,
          synapses, or human memory.
        </p>

        <p>
          The BDH connection should also be interpreted carefully:
          this experiment is not an official BDH or BDH-CQ
          implementation.
        </p>

      </section>

      <button
        className="primary-button"
        onClick={() => setPage("experiment")}
      >
        Open interactive experiment
      </button>

    </main>
  );

  // --------------------------------------------------
  // HISTORY GRAPH
  // --------------------------------------------------

 
  // --------------------------------------------------
  // EXPERIMENT
  // --------------------------------------------------

  const renderExperiment = () => (
    <main className="page-content">

      <section className="section-header experiment-header">

        <div className="eyebrow">
          LIVE EXPERIMENT
        </div>

        <h2>
          Probe the memory state
        </h2>

        <p>
          Change one meaningful variable, introduce conflicting
          evidence, and observe how the internal association state
          changes.
        </p>

      </section>

      <section className="experiment-grid">

        <div className="network-panel">

          <div className="panel-header">

            <div>
              <span className="eyebrow">
                NETWORK STATE
              </span>

              <h3>
                Current associations
              </h3>
            </div>

            <span className="step-counter">
              Step {history.length - 1}
            </span>

          </div>

          <NeuronGraph
            meowWeight={memory.MEOW}
            barkWeight={memory.BARK}
          />

        </div>

        <div className="state-panel">

          <span className="eyebrow">
            CURRENT MEMORY
          </span>

          <div className="state-main">

            <div>
              <span className="state-label">
                Association A
              </span>

              <strong>
                {memory.MEOW.toFixed(2)}
              </strong>
            </div>

            <div className="state-bar">
              <div
                className="state-fill"
                style={{
                  width: `${memory.MEOW * 100}%`,
                }}
              ></div>
            </div>

          </div>

          <div className="state-main">

            <div>
              <span className="state-label">
                Association B
              </span>

              <strong>
                {memory.BARK.toFixed(2)}
              </strong>
            </div>

            <div className="state-bar">
              <div
                className="state-fill secondary"
                style={{
                  width: `${memory.BARK * 100}%`,
                }}
              ></div>
            </div>

          </div>

          <div className="metrics">

            <div className="metric">
              <span>
                Dominant state
              </span>

              <strong>
                {dominantAssociation}
              </strong>
            </div>

            <div className="metric">
              <span>
                Conflicts
              </span>

              <strong>
                {conflictCount}
              </strong>
            </div>

            <div className="metric">
              <span>
                Interference
              </span>

              <strong>
                {interferenceScore.toFixed(2)}
              </strong>
            </div>

          </div>

        </div>

      </section>

      {renderHistory()}

      <section className="control-panel">

        <div className="control-header">

          <div>
            <span className="eyebrow">
              EXPERIMENT CONTROL
            </span>

            <h3>
              Learning rate
            </h3>

            <p>
              Controls how strongly each new example changes
              the current memory state.
            </p>
          </div>

          <strong className="rate-value">
            {learningRate.toFixed(2)}
          </strong>

        </div>

        <input
          className="learning-slider"
          type="range"
          min="0.05"
          max="0.30"
          step="0.05"
          value={learningRate}
          onChange={(event) =>
            setLearningRate(Number(event.target.value))
          }
        />

        <div className="slider-labels">
          <span>Slow adaptation</span>
          <span>Fast adaptation</span>
        </div>

      </section>

      <section className="action-panel">

        <button
          className="action-button"
          onClick={teachMeow}
        >
          Strengthen Association A
        </button>

        <button
          className="action-button conflict"
          onClick={teachBark}
        >
          Introduce Conflicting Evidence
        </button>

        <button
          className="action-button outline"
          onClick={predict}
        >
          Probe Memory
        </button>

        <button
          className="action-button outline"
          onClick={reset}
        >
          Reset
        </button>

      </section>

      <section className="result-panel">

        <span className="eyebrow">
          OBSERVATION
        </span>

        <p>
          {message}
        </p>

      </section>

      <section className="challenge-panel">

        <div>

          <span className="eyebrow">
            LEARNER CHALLENGE
          </span>

          <h3>
            Can you make Association B dominate?
          </h3>

          <p>
            Adjust the learning rate and introduce conflicting
            evidence. Watch the graph and network state. Then
            probe the memory and compare the model's output with
            the expected association.
          </p>

        </div>

        <div className="challenge-target">

          <span>
            TARGET
          </span>

          <strong>
            B &gt; A
          </strong>

        </div>

      </section>

      <section className="evidence-note">

        <span className="eyebrow">
          EVIDENCE BOUNDARY
        </span>

        <p>
          The interactive memory mechanism shown here is a
          deliberately simplified teaching model. Its purpose
          is to make the concept of changing connection strength
          and interference observable. It should not be presented
          as a live implementation of BDH or BDH-CQ.
        </p>

      </section>

    </main>
  );

  // --------------------------------------------------
  // MAIN APP
  // --------------------------------------------------

  return (
    <div className="app">

      <header className="topbar">

        <div
          className="brand"
          onClick={() => setPage("home")}
        >
          <div className="brand-mark">
            SL
          </div>

          <div>
            <strong>
              SynapseLab
            </strong>

            <span>
              Interactive Memory Research
            </span>
          </div>
        </div>

        <nav className="main-nav">

          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Overview
          </button>

          <button
            className={page === "learn" ? "active" : ""}
            onClick={() => setPage("learn")}
          >
            Concept
          </button>

          <button
            className={page === "experiment" ? "active" : ""}
            onClick={() => setPage("experiment")}
          >
            Experiment
          </button>

        </nav>

        <div className="status-indicator">
          <span></span>
          Interactive
        </div>

      </header>

      {page === "home" && renderHome()}

      {page === "learn" && renderLearn()}

      {page === "experiment" && renderExperiment()}

      <footer className="footer">

        <div>
          SynapseLab
        </div>

        <div>
          Educational toy model · BDH connection shown separately
        </div>

      </footer>

    </div>
  );
}

export default App;