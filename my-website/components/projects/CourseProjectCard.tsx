import styles from "./CourseProjectCard.module.scss";
import type { CourseProject } from "@/content/course-projects-data";

type CourseProjectCardProps = {
  project: CourseProject;
};

export default function CourseProjectCard({ project }: CourseProjectCardProps) {
  return (
    <section id={project.id} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.course}>{project.course}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.term}>{project.term}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.highlights}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
