# Kepler's Law of Equal Areas: An Interactive Derivation

An interactive educational module designed to guide users through the physical observations, geometric frameworks, and algebraic structures behind **Kepler's Second Law (The Law of Equal Areas)** as part of NIUS Camp 19.  

Leveraging HTML5 Canvas and D3.js, this simulator transforms abstract planetary telemetry into an intuitive, step-by-step visual learning path.

Currently bein revamped with LLM assist.

---
Experience the complete interactive classroom module here:
**[Kepler System](https://harshinidhiyaa.github.io/Keplers-Law/)**

---

## Learning Path

The learning path is broken down into four steps:

1. **Reality Check (`pages/reality.html`)**: To understand Kepler’s Law of Equal Areas, we begin by asking an anchoring question to understand the implication of the system. Have you ever wondered what helps satellites maintain their programmed orbital paths? Do you know if planets maintain the same speed throughout their entire revolution path or do they change and how does it occur? Why are the objects at perihelion, the closest point to the orbit’s focus, faster than when it is at aphelion, the farthest point from the orbit’s focus? To answer these questions, let’s understand the system.

2. **Idealization Stage (`pages/ideal.html`)**: Mathematical modeling of real-world systems starts by separating them from their physical counterparts and creating a representation that simplifies their analysis. Here we strip away details we consider unnecessary to solving the problem at hand and focus on relevant abstraction. A multi-planetary system is stripped down to a two-body system. Considering a two body system, Mars and Sun excluding the gravitational influence of the planet’s moons and external influence of other space objects A radius vector joining any planet to the Sun sweeps out equal areas in equal lengths of time. In this case, Mars takes 1 month for sweeping one section of the orbit when at aphelion and 1 month for sweeping another orbital arc section at perihelion. But, the areas should be equal. Let's verify this further.

3. **Geometric Structure (`pages/discretization.html`)**: Discretization is the process of roughly splitting a continuous physical system or event into discrete parts or phases to enable easier computational simulation or study. This method is frequently used to simplify complex physical systems so that they can be subjected to numerical analysis or computational modeling. As part of the modeling process, we make the following assumptions: The movement of the planet is only dependent on the Sun’s gravitational force. We also adhere to the following points: The orbits are elliptical. Here, we label the two sections as two separate triangles to calculate the area. In the following stages we will label the sections to derive a quantifiable value.

4. **Geometric Stage Structure (`pages/geometric.html`)**: We place the system in a coordinate system to help with the mathematical description of the object in motion. The planet traverses the distance between A and B, C and D, and E and F in equal times. Consider one section of the ellipse. In this case, FME Here, the planet has traveled at an angle dθ, the distance of the arc length will be rdθ with the distance between the Sun and the planet Mars as r.

5. **Algebraic Structure (`pages/algebraic.html`)**: In the final stage, we prove that the areas are equal with the help of angular momentum formula. We also approach the derivation step-by-step with clarifications of what elaborate math steps that are usually omitted.
---

## 📁 Repository Structure

```text
Keplers-Law/
├── README.md                 # System documentation
├── index.html                # Main application entryway & simulator canvas
├── assets/
│   ├── css/                  # Hardware-accelerated presentation styles
│   │   ├── style.css         # Core global application configurations
│   │   ├── style_overview.css# Responsive cosmic timeline styles
│   │   └── navbar.css        # Interactive step-tracker navigation mechanics
│   └── javascript/           # Simulation & telemetry rendering logic
│       ├── overview.js       # Dashboard core configuration
│       ├── reality2.js       # Observational image array matrix engine
│       └── solution.js       # Orbital engine calculation math
├── images/                   # Static cosmic image assets & GIF diagrams
└── pages/                    # Core module step-by-step documentation screens
    ├── overview.html         # Interactive roadmap navigation deck
    ├── reality.html          # Phase 1: Planetary observations
    ├── ideal.html            # Phase 2: Idealized particle tracks
    ├── geometric.html        # Phase 3: Spatial geometry analysis
    └── algebraic.html        # Phase 4: Algebraic formulation matrix# Keplers-Law
