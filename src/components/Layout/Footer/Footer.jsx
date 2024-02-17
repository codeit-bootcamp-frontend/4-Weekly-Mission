import { Link } from 'react-router-dom';
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
            <Link to="/" className="links__item">
              Privacy Policy
            </Link>
            <Link to="/" className="links__item">
              FAQ
            </Link>
          </div>
        </div>
        <div className="footer__sns">
          <div className="sns">
            <Link to="/" className="sns__item">
              <IconFacebook />
            </Link>
            <Link to="/" className="sns__item">
              <IconTwitter />
            </Link>
            <Link to="/" className="sns__item">
              <IconYoutube />
            </Link>
            <Link to="/" className="sns__item">
              <IconInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
