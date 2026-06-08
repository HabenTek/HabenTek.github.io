import styles from "./ProjectsIntro.module.scss";
import { projectsIntro, site } from "@/content/site-config";

export default function ProjectsIntro() {
  return (
    <section className={styles.intro}>
      <h2 className={styles.heading}>{projectsIntro.heading}</h2>
      <div className={styles.introText}>
        {projectsIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          If you find something interesting or want to collaborate,{" "}
          <a
            className="link"
            href={`mailto:${site.email}?subject=${encodeURIComponent(projectsIntro.contactSubject)}`}
          >
            let me know
          </a>
          !
        </p>
      </div>
    </section>
  );
}
