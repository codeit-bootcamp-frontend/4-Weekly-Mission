import styles from "./footer.module.css";

import facebookIcon from "assets/images/akar-icons_facebook-fill.svg";
import twitterIcon from "assets/images/akar-icons_twitter-fill.svg";
import youtubeIcon from "assets/images/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/images/ant-design_instagram-filled.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
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
