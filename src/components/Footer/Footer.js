import './footer.css';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import youtubeIcon from '../../images/youtube.svg';
import instagramIcon from '../../images/instagram.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">@codeit - 2023</p>
      <div className="footer-link">
        <Link to="/privacy">
          <p className="footer-privacy">Privacy Policy</p>
        </Link>
        <Link to="/FAQ">
          <p className="footer-faq">FAQ</p>
        </Link>
      </div>
      <div className="footer-icon">
        <Link to="https://facebook.com/">
          <img src={facebookIcon} alt="페이스북" />
        </Link>
        <Link to="https://twitter.com/">
          <img src={twitterIcon} alt="트위터" />
        </Link>
        <Link to="https://youtube.com/">
          <img src={youtubeIcon} alt="유튜브" />
        </Link>
        <Link to="https://instagram.com/">
          <img src={instagramIcon} alt="인스타그램" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
