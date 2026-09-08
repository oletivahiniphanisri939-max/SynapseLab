# SynapseLab 

### Synaptic Plasticity as Short-Term Memory

SynapseLab is an interactive educational web application that explains how
synaptic plasticity can act as a form of short-term memory in brain-inspired
AI systems.

The learner can teach a model different associations, observe how synaptic
memory changes, introduce conflicting information, and see how interference
affects the stored association.

---

## 1. Core Technical Claim

> **Changing synaptic connection strengths can temporarily store information,
> but conflicting information can modify those connections and cause memory
> interference.**

This claim is tested through an interactive experiment where the learner can
change the learning input and observe the resulting memory state.



## 2. Project Goal

The goal of SynapseLab is to make the concept of synaptic plasticity
understandable through direct interaction rather than only through static
explanations.

The learner can:

- Understand synaptic plasticity as a memory mechanism.
- Observe changes in synaptic connection strength.
- Modify the learning rate.
- Teach different associations.
- Introduce conflicting information.
- Observe memory interference.
- Compare the expected association with the current memory state.
- Connect the concept to the brain-inspired Dragon Hatchling (BDH) architecture.

---

## 3. Intended Learner

SynapseLab is designed for students and beginners who have basic knowledge of:

- Artificial Intelligence
- Machine Learning
- Neural Networks
- Basic programming concepts

No advanced neuroscience knowledge is required.

---

## 4. Learning Objectives

After using SynapseLab, the learner should be able to:

1. Explain what synaptic plasticity means.
2. Explain how changing connection strengths can represent temporary memory.
3. Understand how new or conflicting information can cause interference.
4. Observe the effect of a learning rate on memory updates.
5. Explain the conceptual relationship between synaptic memory and BDH.
6. Identify limitations of the simplified educational model.

---

## 5. Interactive Experiment

The main experiment uses simple associations such as:

**CAT → MEOW**

and

**CAT → BARK**

Initially, the memory strengths can be represented as:

- MEOW = 0.80
- BARK = 0.20
- Learning Rate = 0.10

The learner can repeatedly teach the model different associations and observe
how the memory strengths change.

This makes the memory state visible instead of hiding the computation behind
a static animation.

---

## 6. Synaptic Plasticity Model

The application uses a simplified educational model of memory updating.

A conceptual update can be represented as:

**New Memory = Old Memory + Learning Rate × Learning Signal**

The learning rate controls how strongly new information changes the existing
memory.

A higher learning rate produces faster changes, while a lower learning rate
makes the memory change more gradually.

This is a simplified teaching model and is not intended to reproduce the full
biological complexity of synaptic plasticity.

---

## 7. BDH / Dragon Hatchling Connection

SynapseLab includes a dedicated BDH learning module.

The BDH section explains the conceptual idea that information can be stored
through changing synaptic connections rather than relying only on traditional
Transformer-style attention representations.

In the educational model:

**Input → Neuron Activity → Synaptic Update → Temporary Memory**

The BDH section is provided to help learners understand how the selected
concept relates to a brain-inspired architecture.

### Important Note

The BDH component in SynapseLab is a **toy educational illustration**.

It is not an official implementation of Dragon Hatchling (BDH), and its
simplified equations and visualizations should not be interpreted as the
official BDH implementation.

---

## 8. Application Architecture

SynapseLab is implemented as a React + Vite web application.

### Main Components

- **App.jsx**
  - Controls the main application state.
  - Handles experiment interactions.
  - Updates memory values and learning parameters.
  - Controls the application pages.

- **NeuronGraph.jsx**
  - Provides a visual representation of the neuron/synapse system.
  - Helps learners observe changes in the memory state.

- **BDHModule.jsx**
  - Provides the educational BDH section.
  - Demonstrates the conceptual relationship between synaptic memory and BDH.

- **App.css / index.css**
  - Provides the user interface styling and layout.

### High-Level Flow

```text
Learner
   ↓
Selects / Changes Learning Input
   ↓
Synaptic Memory Update
   ↓
Memory Strength Changes
   ↓
Neuron Graph / Memory State
   ↓
Learner Observes Interference
   ↓
Learner Explains the Result

##9. Live, Synthetic and Educational Components
Live Computation

The following parts are computed interactively in the browser:

Memory updates
Learning-rate changes
Association changes
Memory state
Experiment results
Visual state changes
Synthetic / Simplified Data

The CAT → MEOW and CAT → BARK examples are synthetic educational examples
designed to make the concept easy to understand.

Educational Visualization

The neuron and synapse visualizations are explanatory representations.
They are not intended to represent a complete biological neural system.



###10. Technology Stack
React
Vite
JavaScript
HTML
CSS
Node.js / npm

No external backend is required for the current interactive demonstration.

####11. Running the Project Locally
Prerequisites

Install:

Node.js
npm
Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project directory:cd synapselab

Install dependencies:npm install
Start the development server:npm run dev

Open the local URL displayed by Vite in the browser.
Production Build

To create a production build:npm run build
The production files are generated in the dist directory.

###12. Public Artifact

Live interactive website:

TODO: Add deployed website URL

The website should open without requiring the learner to sign in.

###13. Source Code

Public GitHub repository:

TODO: Add GitHub repository URL

##14. Research References

The project uses primary research sources to support the technical concepts
discussed in the educational material.

At least three recent primary papers from the 2022–2026 period are included
in the final submission package.

Research citations should be placed beside the relevant technical claims in
the project documentation and blog.

##15. Limitations

SynapseLab is an educational simulation and intentionally simplifies the
underlying mechanisms.

Important limitations include:

The memory update rule is simplified.
The model does not reproduce biological synapses.
The neuron visualization is conceptual.
The BDH module is a toy educational representation.
The experiment uses small synthetic examples.
Results should not be interpreted as a full reproduction of the official
BDH architecture.

These limitations are intentionally disclosed so that the visualization is not
mistaken for a full biological or official BDH implementation.

###16. AI Assistance Disclosure

AI tools were used during the development of SynapseLab for assistance with:

Code generation and debugging
React/Vite implementation support
UI and interaction ideas
Technical writing assistance
Documentation structure
Research organization

The project team reviewed, modified, tested, and integrated the generated
material and is responsible for understanding and defending the final
implementation.

###17. Code, Data and Asset Disclosure
Code

The application code is developed as part of the SynapseLab project.

Third-party libraries are used through the project's npm dependencies and are
subject to their respective licenses.

Data

The interactive CAT → MEOW and CAT → BARK examples are synthetic educational
examples created for this project.

Graphics

Visual elements used in the application are either created for the project,
generated through code, or appropriately credited where applicable.

Fonts and Other Assets

Any third-party fonts, icons, graphics, or components used in the final
version should be listed here with their source and license.

###18. Reproducibility

The project can be reproduced locally using the following commands:

npm install
npm run dev

For a production build:npm run build

The source repository contains the application source code and configuration
required to run the project.

##19. Project Structure
SynapseLab/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── BDHModule.jsx
│   ├── NeuronGraph.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

node_modules is not included in the source repository because dependencies
can be restored using npm install.

##20. DataForge 2026 Submission Links
Live Artifact

TODO: Add deployed website URL

Source Code

TODO: Add public GitHub repository URL

Blog PDF

TODO: Add blog PDF / public link

Concept Summary

TODO: Add concept summary PDF / public link

Additional Documentation

TODO: Add documentation link if applicable

###21. Credits

Project: SynapseLab
Topic: Synaptic Plasticity as Short-Term Memory
Track: DataForge 2026 – Pathway Track
Developed as an educational interactive demonstration of synaptic memory
and its conceptual relationship with brain-inspired AI.