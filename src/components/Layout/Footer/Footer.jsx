import IconFacebook from '../../Icon/IconFacebook';
import IconInstagram from '../../Icon/IconInstagram';
import IconTwitter from '../../Icon/IconTwitter';
import IconYoutube from '../../Icon/IconYoutube';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copyright">©codeit - 2023</div>
        <div className="footer__links">
          <div className="links">
            <a href="#" className="links__item">
              Privacy Policy
            </a>
            <a href="#" className="links__item">
              FAQ
            </a>
          </div>
        </div>
        <div className="footer__sns">
          <div className="sns">
            <div className="sns__item">
              <IconFacebook />
            </div>
            <div className="sns__item">
              <IconTwitter />
            </div>
            <div className="sns__item">
              <IconYoutube />
            </div>
            <div className="sns__item">
              <IconInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
