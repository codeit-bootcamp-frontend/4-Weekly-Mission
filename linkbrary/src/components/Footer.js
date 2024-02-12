import "../styles/Footer.css";
import FACEBOOK from "../icons/facebook.svg";
import INSTAGRAM from "../icons/instagram.svg";
import TWITTER from "../icons/twitter.svg";
import YOUTUBE from "../icons/youtube.svg";

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
              <img src={FACEBOOK} alt="페이스북으로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={TWITTER} alt="트위터로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={YOUTUBE} alt="유튜브로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src={INSTAGRAM} alt="인스타그램으로 이동" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
