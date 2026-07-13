import styles from "./CourseProjectsSection.module.scss";

type CourseProjectsSectionProps = {
  intro: {
    heading: string;
    paragraph: string;
  };
};

export default function CourseProjectsSection({
  intro,
}: CourseProjectsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{intro.heading}</h2>
        <p className={styles.paragraph}>{intro.paragraph}</p>
      </div>
    </section>
  );
}
