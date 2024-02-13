import React from "react";
import styles from "./footer.module.css";
import { facebookIcon, twitterIcon, youtubeIcon, instagramIcon } from "assets";

function Footer() {
  return (
    <footer>
      <div className={styles.wrap}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.links}>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <ul className={styles.icons}>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebookIcon} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <img src={twitterIcon} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtubeIcon} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
