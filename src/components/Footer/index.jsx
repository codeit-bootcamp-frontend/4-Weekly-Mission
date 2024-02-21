import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles.codeit}>&copy;codeit - 2023</div>
        <div className={styles["footer-contact"]}>
          <div className={styles.links}>
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
            <a href="/faq" className={styles.link}>
              FAQ
            </a>
          </div>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className={`${styles.social} ${styles.facebook}`}
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className={`${styles.social} ${styles.twitter}`}
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className={`${styles.social} ${styles.youtube}`}
              rel="noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={`${styles.social} ${styles.instagram}`}
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
