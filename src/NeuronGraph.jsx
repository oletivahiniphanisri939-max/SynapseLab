function NeuronGraph({ meowWeight, barkWeight }) {
  return (
    <div className="neuron-graph">
      <h3>🧠 Synaptic Network</h3>

      <svg
        width="600"
        height="300"
        viewBox="0 0 600 300"
      >
        {/* Synapse lines */}
        <line
          x1="150"
          y1="150"
          x2="450"
          y2="90"
          stroke="black"
          strokeWidth={meowWeight * 12}
        />

        <line
          x1="150"
          y1="150"
          x2="450"
          y2="210"
          stroke="black"
          strokeWidth={barkWeight * 12}
        />

        {/* CAT neuron */}
        <circle
          cx="150"
          cy="150"
          r="40"
          fill="white"
          stroke="black"
          strokeWidth="3"
        />

        {/* MEOW neuron */}
        <circle
          cx="450"
          cy="90"
          r="40"
          fill="white"
          stroke="black"
          strokeWidth="3"
        />

        {/* BARK neuron */}
        <circle
          cx="450"
          cy="210"
          r="40"
          fill="white"
          stroke="black"
          strokeWidth="3"
        />

        {/* Labels */}
        <text
          x="150"
          y="155"
          textAnchor="middle"
          fontSize="16"
        >
          CAT
        </text>

        <text
          x="450"
          y="95"
          textAnchor="middle"
          fontSize="16"
        >
          MEOW
        </text>

        <text
          x="450"
          y="215"
          textAnchor="middle"
          fontSize="16"
        >
          BARK
        </text>

        {/* Weight labels */}
        <text
          x="300"
          y="105"
          textAnchor="middle"
          fontSize="15"
        >
          {meowWeight.toFixed(2)}
        </text>

        <text
          x="300"
          y="205"
          textAnchor="middle"
          fontSize="15"
        >
          {barkWeight.toFixed(2)}
        </text>
      </svg>
    </div>
  );
}

export default NeuronGraph;