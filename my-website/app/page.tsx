import Image from "next/image";
import styles from "./page.module.scss";
import {
  heroLines,
  homeSections,
  interests,
  leetcode,
  site,
  techSections,
} from "@/content/site-config";

export default function Home() {
  return (
    <main>
      <p className={styles.hero}>
        {heroLines.map((line, index) => (
          <span key={line.text}>
            {index > 0 ? <br /> : null}
            {line.mutedBefore ? (
              <span className={styles.grayText}>{line.mutedBefore} </span>
            ) : null}
            {line.text}
            {line.mutedAfter ? (
              <span className={styles.grayText}>{line.mutedAfter}</span>
            ) : null}
          </span>
        ))}
      </p>

      <div className={styles.content}>
        {homeSections.map((section) => (
          <section key={section.title} className={styles.topicSection}>
            <h2 className={styles.sectionHeading}>{section.title}</h2>
            <div className={styles.copyBlock}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {leetcode.showStats && leetcode.username ? (
          <div className={styles.copyBlock}>
            <p className={styles.leetcodeText}>
              I also solve <strong>algorithm</strong> and{" "}
              <strong>data structure</strong> problems on{" "}
              <a
                className="link"
                href={`https://leetcode.com/u/${leetcode.username}/`}
                target="_blank"
                rel="noreferrer"
              >
                <em className={styles.italicText}>LeetCode</em>
              </a>{" "}
              when I get the chance.
            </p>
            <p className={styles.leetcodeImage}>
              <a
                href={`https://leetcode.com/u/${leetcode.username}/`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`https://github-readme-leetcode-card.romitsagu.com/${leetcode.username}?theme=nord&hide_border=true&width=400`}
                  alt="LeetCode profile stats"
                  width={400}
                  height={155}
                  loading="lazy"
                />
              </a>
            </p>
          </div>
        ) : null}

        <section className={styles.techSection}>
          <h2 className={styles.sectionHeading}>Technologies I work with</h2>
          {techSections.map((section) => (
            <div key={section.title} className={styles.techGroup}>
              <h3 className={styles.techGroupHeading}>{section.title}</h3>
              {section.stacks.map((stack) => (
                <div key={stack.label} className={styles.projectPair}>
                  <div className={styles.categoryLabel}>{stack.label}</div>
                  <div>
                    <p>{stack.items}</p>
                    {stack.aside ? (
                      <aside className={styles.grayText}>{stack.aside}</aside>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>

        <div className={styles.copyBlock}>
          <p>{interests}</p>
        </div>

        <div className={styles.profileBlock}>
          <Image
            src={site.profileImage.src}
            alt={site.profileImage.alt}
            width={768}
            height={512}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </main>
  );
}
