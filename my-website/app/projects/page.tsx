import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import { projects } from "@/content/projects-data";
import { pageTitle } from "@/content/site-config";

export const metadata: Metadata = {
  title: pageTitle("Projects"),
  description: "Selected projects and open-source work.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsIntro />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}
