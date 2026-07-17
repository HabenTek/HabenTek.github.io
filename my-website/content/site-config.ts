export type SocialLink = {
  label: string;
  href: string;
  text: string;
};

export type TechStack = {
  label: string;
  items: string;
  aside?: string;
};

export type HomeSection = {
  title: string;
  paragraphs: string[];
};

export type TechSection = {
  title: string;
  stacks: TechStack[];
};

export const site = {
  name: "Haben Gebrekidan",
  email: "hgebrek3@jh.edu",
  description:
    "Mechatronics engineer working in robotics and control, from hardware and software to system integration.",
  profileImage: {
    src: "/profile.jpeg",
    alt: "Professional portrait of Haben Gebrekidan",
  },
} as const;

export const socials: SocialLink[] = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=IenDW_IAAAAJ&hl=en",
    text: "Haben Gebrekidan",
  },
  {
    label: "GitHub",
    href: "https://github.com/HabenTek",
    text: "@HabenTek",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/haben-tekie-gebrekidan-844a7a208/",
    text: "haben-tekie-gebrekidan",
  },
  {
    label: "Email",
    href: "mailto:hgebrek3@jh.edu",
    text: "hgebrek3@jh.edu",
  },
];

export const heroLines = [
  {
    text: "mechatronics engineer",
    mutedBefore: "is a",
    mutedAfter: ",",
  },
  {
    text: "robotics and control",
    mutedBefore: "working in",
    mutedAfter: ", from hardware and software to system integration.",
  },
] as const;

export const homeSections: HomeSection[] = [
  {
    title: "Robotics",
    paragraphs: [
      "At the MUSiiC Lab / LCSR at Johns Hopkins University, I build ROS 2 control pipelines for cooperative UR5e motion, including impedance and admittance control, perception-driven planning, and simulation-to-hardware validation.",
      "I've also worked on mobile robot SLAM and navigation, URScript hand-guiding modes, embedded motion control with Arduino, and mechatronics projects spanning sensing, actuation, and hardware integration.",
    ],
  },
  {
    title: "Control Systems",
    paragraphs: [
      "I work on closed-loop feedback, model predictive control, embedded control, and real-time software for physical systems — from power electronics and grid voltage control to industrial automation.",
      "My background includes HVAC and sensor data systems at Carrier, PCB and microcontroller work in manufacturing, and electromechanical design — with graduate training in power electronics, optimization, and control at Syracuse University and Johns Hopkins.",
      "I'm especially interested in roles that connect software, hardware, and operator-facing systems — including HMI development, supervisory control, tuning and commissioning, and reliable automation on real equipment.",
    ],
  },
  {
    title: "Software & AI",
    paragraphs: [
      "I develop the software layers that make complex systems usable and reliable — from ROS 2 node architecture and real-time control code to Python tooling for data acquisition, analysis, and deployment.",
      "My machine learning work includes benchmarking lightweight segmentation models for edge deployment, with experience in PyTorch, model evaluation, and building practical pipelines from research to implementation.",
    ],
  },
];

export const interests =
  "Open to roles in control systems engineering, mechatronics, robotics, and automation.";

export const techSections: TechSection[] = [
  {
    title: "Robotics",
    stacks: [
      {
        label: "robot software",
        items: "ROS 1/2 • Gazebo • RViz • MoveIt • SLAM • localization • navigation • sim-to-real",
      },
      {
        label: "manipulation & platforms",
        items:
          "UR5e • URScript • TurtleBot4 • LiDAR • force/torque sensing • motion planning • embedded motion control",
        aside: "cooperative control, hand-guiding",
      },
      {
        label: "perception & integration",
        items:
          "OpenCV • 3D Slicer • robot–camera synchronization • multi-view imaging • hardware validation",
      },
    ],
  },
  {
    title: "Control Systems",
    stacks: [
      {
        label: "control theory & tuning",
        items:
          "closed-loop feedback • MPC • PID tuning • impedance & admittance control • QP • system identification",
      },
      {
        label: "industrial & operator systems",
        items:
          "HMI • supervisory control • commissioning • sensor integration • data acquisition • HVAC control systems",
      },
      {
        label: "embedded & power hardware",
        items:
          "microcontrollers • PCB bring-up • power electronics • electromechanical systems • Arduino • Raspberry Pi",
      },
    ],
  },
  {
    title: "Software & AI",
    stacks: [
      {
        label: "programming",
        items: "C++ • Python • MATLAB • Linux • Git",
      },
      {
        label: "machine learning",
        items:
          "PyTorch • CNNs • Transformer-based models • segmentation • benchmarking • Dice and IoU metrics",
        aside: "edge deployment, model evaluation",
      },
      {
        label: "engineering tools",
        items: "JupyterLab • SolidWorks • Altium Designer • experiment logging • reproducible workflows",
      },
    ],
  },
];

export const leetcode = {
  username: "",
  showStats: false,
} as const;

export const projectsIntro = {
  heading: "Research & Engineering Projects",
  paragraphs: [
    "Research and engineering work in medical robotics, surgical planning, perception, and control — from ROS 2 surgical workflows to machine learning segmentation and grid voltage control.",
    "Several projects have led to conference papers, technical articles, and live ARPA-H demonstrations.",
  ],
  contactSubject: "Research and Projects",
};

export const navLinks = [
  { label: "projects", href: "/projects" },
  { label: "reading", href: "/reading" },
  { label: "resume", href: "/resume" },
] as const;

export const pageTitles: Record<string, string> = {
  "/projects": "Projects",
  "/reading": "Reading",
  "/resume": "Resume",
};

export function pageTitle(suffix: string) {
  return `${site.name} – ${suffix}`;
}
