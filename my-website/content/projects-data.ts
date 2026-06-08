export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectPreview =
  | {
      type: "image";
      href: string;
      src: string;
      alt: string;
      variant?: "photo" | "logo";
    }
  | { type: "paper"; href: string; label: string };

export type Project = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  links: ProjectLink[];
  preview: ProjectPreview;
};

export const projects: Project[] = [
  {
    id: "breast-surgical-planning",
    title: "Robotic Breast Surgical Planning Workflow with 3D Slicer",
    tags: [
      "ROS 2",
      "UR5e",
      "3D Slicer",
      "OpenIGTLink",
      "Python",
      "Surgical Robotics",
    ],
    description:
      "Integrated UR5e robot control, surgical endoscope imaging, and 3D Slicer visualization into a unified clinical workflow, enabling cooperative robot positioning and automated field-scan motions for breast tumor localization and high-resolution cavity imaging. Built live demo and interface-testing tools to validate real-time data flow between robotic hardware, imaging devices, and planning software.",
    links: [
      {
        label: "Kitware Technical Article",
        href: "https://www.kitware.com/advancing-breast-surgical-planning-with-3d-slicer/",
      },
    ],
    preview: {
      type: "image",
      href: "https://www.kitware.com/advancing-breast-surgical-planning-with-3d-slicer/",
      src: "/projects/kitware-logo.png",
      alt: "Kitware logo",
      variant: "logo",
    },
  },
  {
    id: "cooperative-mode-ur5e",
    title: "UR5e Cooperative Control — Admittance Modes",
    tags: [
      "UR5e",
      "URScript",
      "Admittance Control",
      "Hand-Guiding",
      "Universal Robots",
    ],
    description:
      "Admittance-based hand-guiding for the Universal Robots UR5e, implemented in URScript. Four selectable compliance modes share a single control core and helper library — from 1-DOF Z-axis insertion to full 6-DOF teach-mode hand-guiding. Built on Universal Robots' admittance control framework with cooperative mode extensions.",
    links: [
      {
        label: "GitHub Repository (private)",
        href: "https://github.com/HabenTek/Cooperative_mode_Ur5e",
      },
    ],
    preview: {
      type: "image",
      href: "https://github.com/HabenTek/Cooperative_mode_Ur5e",
      src: "/projects/ur5e.png",
      alt: "Universal Robots UR5e collaborative robot arm",
      variant: "photo",
    },
  },
  {
    id: "poc-segmentation-benchmark",
    title: "Point-of-Care Medical Image Segmentation Benchmark",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "U-Net",
      "MedT",
      "UNeXt",
      "Kvasir-SEG",
    ],
    description:
      "Machine learning benchmark for point-of-care medical image segmentation. Compared U-Net, MedT, and UNeXt CNN and Transformer-based models across accuracy, efficiency, and latency on edge-deployment constraints. Developed an accuracy–efficiency score that identified UNeXt as the strongest candidate. First-author paper accepted at ICBET 2026.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/HabenTek/Point-of-Care-Segmentation-",
      },
      {
        label: "ICBET 2026",
        href: "https://www.icbet.org",
      },
    ],
    preview: {
      type: "image",
      href: "https://github.com/HabenTek/Point-of-Care-Segmentation-",
      src: "/projects/poc-segmentation.png",
      alt: "Comparison of U-Net, UNeXt, and MedT segmentation results",
      variant: "photo",
    },
  },
  {
    id: "dd-mpc-voltage-control",
    title: "Data-Driven MPC for Renewable-Rich Power Grid Voltage Control",
    tags: ["Python", "MATLAB", "MPC", "OSQP", "IEEE 9-Bus System"],
    description:
      "Designed a data-driven MPC approach to regulate grid voltage under renewable generation variability and operational constraints. Validated the controller on the IEEE 9-bus system, demonstrating real-time feasibility for renewable-rich power system operation. First-author IEEE conference paper.",
    links: [
      {
        label: "IEEE Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/11422155",
      },
    ],
    preview: {
      type: "image",
      href: "https://ieeexplore.ieee.org/abstract/document/11422155",
      src: "/projects/ieee-logo.png",
      alt: "IEEE logo",
      variant: "logo",
    },
  },
];
