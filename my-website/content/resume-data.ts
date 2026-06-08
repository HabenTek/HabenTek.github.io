export type ResumeEntry = {
  title: string;
  titleHref?: string;
  date?: string;
  byline?: string;
  details: string[];
};

export type ResumeSection = {
  heading: string;
  entries: ResumeEntry[];
};

export const resumePdfHref = "/resume.pdf";

export const resumeSections: ResumeSection[] = [
  {
    heading: "Education",
    entries: [
      {
        title: "Johns Hopkins University",
        titleHref: "https://www.jhu.edu/",
        date: "Aug 2024 – May 2026",
        byline: "M.S.E. in Electrical Engineering • Baltimore, MD",
        details: ["Focus: Medical and Surgical Robotics"],
      },
      {
        title: "Syracuse University",
        titleHref: "https://www.syracuse.edu/",
        date: "Aug 2022 – May 2024",
        byline:
          "M.S. in Electrical and Electronics Engineering • Syracuse, NY • GPA: 3.83/4.00",
        details: ["Focus: Power Electronics, Optimization, and Control Systems"],
      },
      {
        title: "Addis Ababa Science & Technology University",
        date: "Sept 2016 – Sept 2021",
        byline:
          "B.S. in Electromechanical Engineering • Addis Ababa, Ethiopia • GPA: 3.77/4.00",
        details: [],
      },
    ],
  },
  {
    heading: "Experience",
    entries: [
      {
        title: "Research Assistant, Medical Robotics — MUSiiC Lab / LCSR, Johns Hopkins University",
        titleHref: "https://lcsr.jhu.edu/",
        date: "Aug 2025 – Present",
        byline: "Baltimore, MD",
        details: [
          "Executed one of four core workstreams in a large-scale ARPA-H-funded PSI project involving 100+ collaborators, focused on image-guided intraoperative robotic assistance for breast cancer surgery.",
          "Architected modular ROS 2 autonomy and real-time control pipelines, including cooperative and autonomous UR5e motion with impedance and admittance control, for repeatable lumpectomy cavity scanning via multi-node coordination through topics, services, and actions.",
          "Integrated perception with robotic motion by synchronizing image acquisition with robot trajectories to support multi-view coverage planning and surgical cavity documentation.",
          "Collaborated with Kitware on custom 3D Slicer application development, integrating surgical visualization, robot control, and workflow validation tools.",
          "Built Gazebo and RViz simulation environments to model and de-risk robotic behaviors before hardware deployment; identified failure modes, debugged root causes, proposed design improvements, and validated solutions through simulation and real hardware testing.",
          "Conducted phantom and ex-vivo experiments to characterize robotic workflow performance and accuracy; results presented at ARPA-H site-visit demonstrations and contributing to a first-author manuscript in preparation.",
        ],
      },
      {
        title: "Electrical Engineering Technician — DL Manufacturing",
        date: "Jan 2024 – May 2024",
        byline: "Syracuse, NY",
        details: [
          "Assisted in dock manufacturing and testing, including PCB design for power electronics, microcontroller programming, and prototype development and validation prior to deployment.",
          "Performed electrical maintenance, wiring diagram verification, and compliance checks against standard requirements, working with motors and drives.",
        ],
      },
      {
        title: "Teaching Assistant, Introduction to Electrical Circuits — Syracuse University",
        titleHref: "https://www.syracuse.edu/",
        date: "Aug 2023 – Jan 2024",
        byline: "Syracuse, NY",
        details: [
          "Led weekly recitation sessions for Introduction to Electrical Circuits, reinforcing course material on circuit analysis, theorems, and fundamental electrical concepts.",
          "Held office hours and provided hands-on lab guidance, grading assignments and exams while offering feedback to reinforce student understanding.",
        ],
      },
      {
        title: "Research Assistant — Dynamic Locomotion & Robotics Lab, Syracuse University",
        date: "Sept 2022 – Jan 2023",
        byline: "Syracuse, NY",
        details: [
          "Implemented ROS-based SLAM, localization, and navigation packages for TurtleBot mobile robots across simulation and hardware environments, enabling autonomous temperature and air quality regulation throughout large buildings for energy-efficient HVAC control.",
          "Integrated LiDAR and onboard sensing for mapping, obstacle avoidance, and autonomous navigation.",
        ],
      },
      {
        title: "Embedded Control Engineering Intern — Carrier Corporation",
        titleHref: "https://www.carrier.com/",
        date: "May 2023 – Aug 2023",
        byline: "Syracuse, NY",
        details: [
          "Developed a Python application to parse HVAC sensor logs into structured Excel reports, handling 120+ event types and 80+ sensor categories for marine refrigeration systems.",
          "Debugged a critical DCX package parsing error, traced the root cause, and reported findings to the DCX team; validated sensor outputs using Carrier's internal proprietary tooling.",
        ],
      },
      {
        title: "Electrical Engineering Intern — ARCOM Labs",
        date: "Jan 2023 – May 2023",
        byline: "Syracuse, NY",
        details: [
          "Validated RF amplifiers and power electronics using oscilloscopes, multimeters, and bench instruments; debugged PCB-level faults and replaced components to meet performance specifications prior to release.",
          "Programmed microchips, performed PCB soldering, and executed pass/fail testing to ensure hardware reliability and quality compliance.",
        ],
      },
      {
        title: "Researcher — New Era Research & Development Center (NERD's Center)",
        date: "Sept 2020 – Aug 2022",
        byline: "Addis Ababa, Ethiopia",
        details: [
          "Designed and 3D printed mechanical components in SolidWorks and assembled CNC X-Y plotter systems, handling full system integration from mechanical design to hardware assembly.",
          "Programmed Arduino microcontrollers in the Arduino IDE to implement embedded motion control, coordinating stepper motors and hardware interfaces for precise plotter operation.",
        ],
      },
    ],
  },
  {
    heading: "Honors & Awards",
    entries: [
      {
        title: "Rubenstein Fellowship",
        titleHref: "https://engineering.jhu.edu/ece/awards/",
        byline: "Johns Hopkins University",
        details: [],
      },
      {
        title: "LCSR Fellowship",
        byline: "Johns Hopkins University",
        details: [],
      },
      {
        title: "SWE ARDC Foundation Scholarship",
        titleHref:
          "https://alltogether.swe.org/2024/05/the-impact-of-the-ardc-foundations-scholarships-for-women-in-engineering/",
        details: [],
      },
      {
        title: "ISA Aerospace and Test Measurement Division Scholarship",
        titleHref:
          "https://www.isa.org/news-press-releases/2023/july/isa-awards-scholarships-to-over-30-students-fr-1",
        details: [],
      },
      {
        title: "ISA Process Measurement & Control Division Award",
        titleHref:
          "https://www.isa.org/news-press-releases/2023/july/isa-awards-scholarships-to-over-30-students-fr-1",
        details: [],
      },
      {
        title: "Syracuse University Merit Scholarship",
        details: [],
      },
      {
        title: "Best Academic Achievement Trophy",
        byline: "Addis Ababa Science & Technology University",
        details: [],
      },
    ],
  },
];
