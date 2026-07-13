import type { Metadata } from "next";
import CourseProjectCard from "@/components/projects/CourseProjectCard";
import CourseProjectsSection from "@/components/projects/CourseProjectsSection";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import {
  courseProjects,
  courseProjectsIntro,
} from "@/content/course-projects-data";
import { projects } from "@/content/projects-data";
import { pageTitle } from "@/content/site-config";

export const metadata: Metadata = {
  title: pageTitle("Projects"),
  description:
    "Research projects, publications, and graduate course projects in control, robotics, power systems, and machine learning.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsIntro />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <CourseProjectsSection intro={courseProjectsIntro} />
      {courseProjects.map((project) => (
        <CourseProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}
