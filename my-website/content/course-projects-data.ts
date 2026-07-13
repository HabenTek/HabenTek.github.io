export type CourseProject = {
  id: string;
  course: string;
  title: string;
  term: string;
  tags: string[];
  description: string;
  highlights: string[];
};

export const courseProjectsIntro = {
  heading: "Course Projects",
  paragraph:
    "Selected graduate coursework at Syracuse University in digital logic, power electronics, and power systems — focused on control, simulation, and optimization.",
};

export const courseProjects: CourseProject[] = [
  {
    id: "ele635-tank-level-indicator",
    course: "ELE 635 — Digital Electronic Circuits",
    title: "Tank Level Indicator",
    term: "Syracuse University • Mar 2023",
    tags: [
      "Digital Logic",
      "AND/OR/NOR Gates",
      "CircuitVerse",
      "Sensors",
      "Industrial Monitoring",
    ],
    description:
      "Designed a three-tank fluid level monitoring circuit that warns supervisors of low level, near-overflow, and normal operating conditions using combinational logic.",
    highlights: [
      "Used AND, OR, and NOR gates to drive green, orange, and red LED status outputs for three tanks.",
      "Derived Boolean expressions, truth tables, and timing diagrams; simulated the full circuit in CircuitVerse.",
      "Modeled tank sensors as digital inputs and validated low-level, normal, and near-overflow operating cases.",
    ],
  },
  {
    id: "ele617-boost-converter-pid",
    course: "ELE 617 — Power Electronics",
    title: "PID Control of a DC–DC Boost Converter",
    term: "Syracuse University • Dec 2022",
    tags: [
      "Power Electronics",
      "MATLAB/Simulink",
      "PID Tuning",
      "State-Space Modeling",
      "Boost Converter",
    ],
    description:
      "Modeled a non-ideal boost converter using averaged state-space techniques and designed controllers to regulate output voltage under source and load variation.",
    highlights: [
      "Built steady-state and dynamic models in MATLAB/Simulink for CCM operation of a non-ideal boost converter.",
      "Compared five PID tuning methods (ZN-FDM, MZN, DOM, TLM, GGM) on transient response to set-point changes.",
      "Designed a custom PD controller targeting 48 V output with about 0.5% overshoot and 0.0002 s settling time.",
    ],
  },
  {
    id: "ele791-flexibility-metric",
    course: "ELE 791 — Power Systems",
    title: "Flexibility Metric for Renewable-Rich Power Grids",
    term: "Syracuse University • Team project",
    tags: [
      "Power Systems",
      "Probabilistic OPF",
      "PandaPower",
      "YALMIP",
      "Solar Uncertainty",
      "IEEE 30-Bus",
    ],
    description:
      "Co-developed a flexibility metric for power grids with solar generation uncertainty, formulated as an optimization problem over target versus actual generation mixes.",
    highlights: [
      "Simulated 42 IEEE 30-bus scenarios with varying solar penetration, line limits, load changes, and N-1 contingencies.",
      "Built an ETL pipeline in PandaPower for target (OPF) and steady-state power flow data used in the optimization.",
      "Implemented probabilistic OPF with YALMIP to compare target and steady-state generation mixes under solar uncertainty.",
    ],
  },
];
