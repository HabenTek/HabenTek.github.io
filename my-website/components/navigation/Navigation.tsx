"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import { navLinks, pageTitles, site } from "@/content/site-config";

export default function Navigation() {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname];

  return (
    <header className={styles.navContainer}>
      <h1 className={styles.logo}>
        <Link href="/">{site.name}</Link>
        {pageTitle ? (
          <span className={styles.pageTitle}>
            <span className={styles.pageTitleDash}>—</span> {pageTitle}
          </span>
        ) : null}
      </h1>
      <nav className={styles.navigation}>
        {navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={`${styles.navItem} ${
              pathname === navLink.href ? styles.navItemActive : ""
            }`}
          >
            {navLink.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
