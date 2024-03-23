import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
} from "../../assets/svg/FooterIcons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.codeit}>©codeit - 2024</p>
      <div className={styles.linkBox}>
        <Link>Privacy Policy</Link>
        <Link>FAQ</Link>
      </div>
      <ul className={styles.snsBox}>
        <Link>
          <Facebook />
        </Link>
        <Link>
          <Twitter />
        </Link>
        <Link>
          <Youtube />
        </Link>
        <Link>
          <Instagram />
        </Link>
      </ul>
    </footer>
  );
}
