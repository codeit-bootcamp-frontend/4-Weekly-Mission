import '../styles/Footer.css';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import youtubeIcon from '../assets/youtube.svg';

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
            <a href="https://www.facebook.com/" target="_blank" className="sns-item" rel="noreferrer">
              <img src={facebookIcon} alt="페이스북으로 이동" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" className="sns-item" rel="noreferrer">
              <img src={twitterIcon} alt="트위터로 이동" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" className="sns-item" rel="noreferrer">
              <img src={youtubeIcon} alt="유튜브로 이동" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" className="sns-item" rel="noreferrer">
              <img src={instagramIcon} alt="인스타그램으로 이동" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
