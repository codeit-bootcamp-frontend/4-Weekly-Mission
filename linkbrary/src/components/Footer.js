import "../styles/Footer.css";
import facebookImgSrc from "../assets/facebook.svg";
import instagramImgSrc from "../assets/instagram.svg";
import twitterImgSrc from "../assets/twitter.svg";
import youtubeImgSrc from "../assets/youtube.svg";

function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-group">
        <span className="copyright">©codeit - 2023</span>
        <ul className="link-list">
          <li>
            <a href="/privacy" className="link-item">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/faq" className="link-item">
              FAQ
            </a>
          </li>
        </ul>
        <ul className="sns-list">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={facebookImgSrc} alt="페이스북으로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={twitterImgSrc} alt="트위터로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={youtubeImgSrc} alt="유튜브로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={instagramImgSrc} alt="인스타그램으로 이동" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
