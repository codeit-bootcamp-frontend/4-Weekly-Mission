import { Link } from "react-router-dom";
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/assets";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.codeit}>©codeit - 2024</p>
      <div className={styles.linkBox}>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">FAQ</Link>
      </div>
      <ul className={styles.snsBox}>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <YoutubeIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
      </ul>
    </footer>
  );
}
