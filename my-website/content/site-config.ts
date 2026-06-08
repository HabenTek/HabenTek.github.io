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

export const site = {
  name: "Haben Gebrekidan",
  email: "hgebrek3@jh.edu",
  description:
    "Electrical engineer and medical robotics researcher at Johns Hopkins University. ROS 2, surgical robotics, perception, and control systems.",
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
    text: "robotics and mechatronics engineer",
    mutedBefore: "is a",
    mutedAfter: ",",
  },
  {
    text: "medical robotics researcher",
    mutedBefore: "currently working as a",
    mutedAfter: ".",
  },
] as const;

export const homeParagraphs: string[] = [
  "I'm a Research Assistant at the MUSiiC Lab / LCSR at Johns Hopkins University in Baltimore, MD, where I work on image-guided intraoperative robotic assistance for breast cancer surgery as part of an ARPA-H-funded PSI project.",
  "I architect ROS 2 autonomy and real-time control pipelines for cooperative and autonomous UR5e motion, integrating impedance and admittance control, perception-driven planning, and 3D Slicer-based surgical visualization with Kitware.",
  "My background spans medical robotics, SLAM and mobile robot navigation, embedded control, and power systems — with degrees from Johns Hopkins (M.S.E.), Syracuse University (M.S.), and Addis Ababa Science & Technology University (B.S. in Electromechanical Engineering).",
  "I'm interested in simulation-to-real deployment, closed-loop robotic control, and building reliable software systems that connect perception, motion planning, and hardware — from ROS 2 node architecture to real-time control on physical platforms.",
];

export const interests =
  "Open to roles in robotics software, autonomy, and control systems.";

export const techStacks: TechStack[] = [
  {
    label: "programming",
    items: "C++ • Python • MATLAB",
  },
  {
    label: "robotics & autonomy",
    items:
      "ROS 1/2 • MoveIt • Gazebo • RViz • SLAM • UR5e/URScript • TurtleBot4 • LiDAR • force/torque sensing",
    aside: "motion planning, navigation, sim-to-real",
  },
  {
    label: "control & optimization",
    items:
      "impedance & admittance control • task-space control • MPC • QP • closed-loop feedback",
  },
  {
    label: "perception & imaging",
    items:
      "OpenCV • 3D Slicer • medical image segmentation • multi-view imaging • phantom-based experiments",
    aside: "deep learning",
  },
  {
    label: "machine learning",
    items:
      "PyTorch • CNNs • Transformer-based models • benchmarking • Dice and IoU metrics",
  },
  {
    label: "tools & hardware",
    items:
      "Linux • Git • JupyterLab • Arduino • Raspberry Pi • SolidWorks • Altium Designer",
  },
];

export const leetcode = {
  username: "",
  showStats: false,
} as const;

export const projectsIntro = {
  heading: "Selected Projects",
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
