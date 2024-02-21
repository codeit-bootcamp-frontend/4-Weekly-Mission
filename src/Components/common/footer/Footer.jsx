import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../layout/Wrapper";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.footer_container}>
        <p className={styles.footer_text}>©codeit - 2023</p>
        <div className={styles.footer_link}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">FAQ</Link>
        </div>
        <div className={styles.social}>
          <Link to="https://www.facebook.com/" target="_blank">
            <img src="Icons/facebook_logo.png" alt="facebook_link" />
          </Link>
          <Link to="https://twitter.com/?lang=ko" target="_blank">
            <img src="Icons/twitter_logo.png" alt="twitter_link" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <img src="Icons/youtube_logo.png" alt="youtube_link" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <img
              src="Icons/instagram_logo.png"
              alt="instagram_link"
            />
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
