import type { Metadata } from "next";
import styles from "./page.module.scss";
import { resumePdfHref, resumeSections } from "@/content/resume-data";
import { pageTitle } from "@/content/site-config";

export const metadata: Metadata = {
  title: pageTitle("Resume"),
  description: "Education, experience, and resume download.",
};

export default function Resume() {
  return (
    <main>
      <p className={styles.pdfRow}>
        <a
          className={styles.pdfLink}
          href={resumePdfHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF Download
        </a>
      </p>

      {resumeSections.map((section) => (
        <section key={section.heading} className={styles.section}>
          <h2 className={styles.heading}>{section.heading}</h2>

          {section.entries.map((entry) => (
            <div key={`${section.heading}-${entry.title}`} className={styles.entry}>
              <div className={styles.entryHeader}>
                <h3 className={styles.entryTitle}>
                  {entry.titleHref ? (
                    <a className="link" href={entry.titleHref}>
                      {entry.title}
                    </a>
                  ) : (
                    entry.title
                  )}
                </h3>
                {entry.date ? (
                  <div className={styles.entryDate}>{entry.date}</div>
                ) : null}
              </div>

              {entry.byline ? (
                <p className={styles.byline}>{entry.byline}</p>
              ) : null}

              {entry.details.length > 0 ? (
                entry.details.length === 1 &&
                !entry.details[0].startsWith("•") ? (
                  <p>{entry.details[0]}</p>
                ) : (
                  <ul className={styles.jobList}>
                    {entry.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )
              ) : null}
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
