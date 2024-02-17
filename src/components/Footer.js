import { Link } from "react-router-dom";
import styles from "./css/Footer.module.css";

const Footer = () => {
  const smallIconStyle = {
    width: "18px",
    height: "18px",
  };
  const regularIconStyle = {
    width: "20px",
    height: "20px",
  };
  return (
    <footer>
      <div className={styles.txt_copyright}>©codeit - 2023</div>
      <div className={styles.txt_CS}>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className={styles.icons_footer}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="facebook logo"
            src="icons/facebook_logo.png"
            style={smallIconStyle}
          />
        </a>
        <a
          href="https://www.twittwe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="twitter logo"
            src="icons/twitter_logo.png"
            style={regularIconStyle}
          />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="youtube logo"
            src="icons/youtube_logo.png"
            style={regularIconStyle}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="instagram logo"
            src="icons/instagram_logo.png"
            style={regularIconStyle}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
