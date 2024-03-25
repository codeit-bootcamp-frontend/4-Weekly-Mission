import { Link } from "react-router-dom";
import { Facebook, Youtube, Twitter, Instagram } from "@/assets";
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
        {/* 여기에서는 ul - li 태그로 하는게 더 시맨틱하지 않을까요? */}
        <Link to="https://www.facebook.com">
          <Facebook />
        </Link>
        <Link to="https://twitter.com">
          <Twitter />
        </Link>
        <Link to="https://www.youtube.com">
          <Youtube />
        </Link>
        <Link to="https://www.instagram.com">
          <Instagram />
        </Link>
      </ul>
    </footer>
  );
}
