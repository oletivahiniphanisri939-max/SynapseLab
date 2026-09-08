import { useState } from "react";

function BDHModule() {
  const [demonstrations, setDemonstrations] = useState(0);
  const [memoryState, setMemoryState] = useState(0.3);
  const [lastUpdate, setLastUpdate] = useState(
    "No demonstration has been processed yet."
  );

  const processDemonstration = () => {
    const nextDemonstrations = demonstrations + 1;

    // Educational abstraction:
    // each demonstration strengthens the recurrent memory state.
    const nextMemory = Math.min(
      1,
      0.3 + nextDemonstrations * 0.12
    );

    setDemonstrations(nextDemonstrations);
    setMemoryState(nextMemory);

    setLastUpdate(
      `Demonstration ${nextDemonstrations} updated the recurrent memory state.`
    );
  };

  const resetModule = () => {
    setDemonstrations(0);
    setMemoryState(0.3);
    setLastUpdate("Memory state reset.");
  };

  const memoryPercentage = Math.round(memoryState * 100);

  return (
    <div className="bdh-module">
      {/* Header */}
      <div className="bdh-module-header">
        <div>
          <span className="eyebrow">BDH CONNECTION</span>

          <h3>From Attention to Synaptic Memory</h3>

          <p>
            This module gives an educational view of how a
            brain-inspired architecture can treat changing internal
            state as a form of memory while processing a sequence.
          </p>
        </div>

        <span className="bdh-badge">
          CONCEPTUAL MODEL
        </span>
      </div>

      {/* Core mechanism */}
      <div className="bdh-flow">
        <div className="bdh-flow-step">
          <span className="bdh-step-number">01</span>

          <div className="bdh-node">
            <strong>Input</strong>
            <span>New information</span>
          </div>
        </div>

        <div className="bdh-arrow">→</div>

        <div className="bdh-flow-step">
          <span className="bdh-step-number">02</span>

          <div className="bdh-node active-node">
            <strong>Synaptic Update</strong>
            <span>Memory changes</span>
          </div>
        </div>

        <div className="bdh-arrow">→</div>

        <div className="bdh-flow-step">
          <span className="bdh-step-number">03</span>

          <div className="bdh-node">
            <strong>Recurrent State</strong>
            <span>Information persists</span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bdh-explanation">
        <div className="bdh-explanation-item">
          <span className="bdh-symbol">A</span>

          <div>
            <h4>Attention as memory interaction</h4>

            <p>
              In the BDH perspective, attention can be reformulated
              as an interaction with a synaptic-like memory state
              that changes as the model reads information.
            </p>
          </div>
        </div>

        <div className="bdh-explanation-item">
          <span className="bdh-symbol">B</span>

          <div>
            <h4>Hebbian-style update</h4>

            <p>
              Information can modify the internal state through
              update operations inspired by synaptic learning.
              The state is then available to later processing.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive demonstration */}
      <div className="bdh-experiment">
        <div className="bdh-experiment-header">
          <div>
            <span className="eyebrow">INTERACTIVE DEMONSTRATION</span>

            <h4>Update the memory state</h4>

            <p>
              Process demonstrations and observe how the conceptual
              recurrent memory state changes.
            </p>
          </div>

          <div className="bdh-counter">
            <span>DEMONSTRATIONS</span>
            <strong>{demonstrations}</strong>
          </div>
        </div>

        {/* Memory meter */}
        <div className="bdh-memory">
          <div className="bdh-memory-top">
            <span>Recurrent memory state</span>
            <strong>{memoryState.toFixed(2)}</strong>
          </div>

          <div className="bdh-memory-track">
            <div
              className="bdh-memory-fill"
              style={{
                width: `${memoryPercentage}%`,
              }}
            />
          </div>

          <div className="bdh-memory-labels">
            <span>Initial</span>
            <span>{memoryPercentage}%</span>
            <span>High state</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="bdh-actions">
          <button
            className="bdh-primary-button"
            onClick={processDemonstration}
          >
            Process Demonstration
          </button>

          <button
            className="bdh-secondary-button"
            onClick={resetModule}
          >
            Reset
          </button>
        </div>

        {/* Result */}
        <div className="bdh-result">
          <span className="bdh-result-label">
            STATE UPDATE
          </span>

          <p>{lastUpdate}</p>
        </div>
      </div>

      {/* BDH-CQ connection */}
      <div className="bdh-cq-panel">
        <div className="bdh-cq-title">
          <span className="eyebrow">BDH-CQ CONNECTION</span>

          <h4>Adaptation through recurrent state</h4>
        </div>

        <p>
          BDH-CQ extends the idea toward learning from
          demonstrations. The important distinction is that the
          adaptation shown here should be understood as a change in
          recurrent state rather than an inference-time update of
          model parameters.
        </p>

        <div className="bdh-cq-flow">
          <span>Demonstration</span>
          <b>→</b>
          <span>Memory update</span>
          <b>→</b>
          <span>Reasoning</span>
        </div>
      </div>

      {/* Boundary / limitation */}
      <div className="bdh-warning">
        <div className="bdh-warning-mark">i</div>

        <div>
          <strong>Important evidence boundary</strong>

          <p>
            This is an independent educational abstraction. It is
            not the official BDH or BDH-CQ implementation, and the
            memory meter above is not a measurement from the actual
            BDH architecture. It is included to make the mechanism
            easier to understand and experiment with.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BDHModule;