import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from '../../Icon';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copyright">©codeit - 2023</div>
        <div className="footer__links">
          <div className="links">
            <a href="/" className="links__item">
              Privacy Policy
            </a>
            <a href="/" className="links__item">
              FAQ
            </a>
          </div>
        </div>
        <div className="footer__sns">
          <div className="sns">
            <a href="/" className="sns__item">
              <IconFacebook />
            </a>
            <a href="/" className="sns__item">
              <IconTwitter />
            </a>
            <a href="/" className="sns__item">
              <IconYoutube />
            </a>
            <a href="/" className="sns__item">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
