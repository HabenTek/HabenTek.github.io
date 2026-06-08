import styles from "./Footer.module.scss";
import { socials } from "@/content/site-config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {socials.map((link) => (
        <div key={link.label} className={styles.row}>
          <span className={styles.label}>{link.label}</span>
          <hr className={styles.divider} />
          <a href={link.href} className="link">
            {link.text}
          </a>
        </div>
      ))}
    </footer>
  );
}
