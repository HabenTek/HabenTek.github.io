import Image from "next/image";
import styles from "./page.module.scss";
import {
  heroLines,
  homeParagraphs,
  interests,
  leetcode,
  site,
  techStacks,
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
        <div className={styles.copyBlock}>
          {homeParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {leetcode.showStats && leetcode.username ? (
            <>
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
            </>
          ) : null}
        </div>

        <div className={styles.techSection}>
          <p className={styles.techHeading}>Technologies I work with:</p>
          {techStacks.map((stack) => (
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
