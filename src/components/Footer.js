import iconFacebook from '../assets/icons/facebook.svg';
import iconTwitter from '../assets/icons/twitter.svg';
import iconYoutube from '../assets/icons/youtube.svg';
import iconInstagram from '../assets/icons/instagram.svg';
import '../styles/Footer.css';

const Footer = () => {
  const facebook = 'https://www.facebook.com/?locale=ko_KR';
  const twitter = 'https://twitter.com/?lang=ko';
  const youtube = 'https://www.youtube.com/';
  const instagram = 'https://www.instagram.com/';

  return (
    <footer>
      <div className="footer-container">
        <p className="footer-company">©codeit - 2023</p>
        <div className="footer-privacy-faq">
          <a className="privacy" href="/pages/privacy.html">
            Privacy Policy
          </a>
          <a className="faq" href="/pages/faq.html">
            FAQ
          </a>
        </div>
        <div className="footer-icons">
          <a href={facebook}>
            <img className="footer-icon" src={iconFacebook} alt="페이스북으로 이동하기." />
          </a>
          <a href={twitter}>
            <img className="footer-icon" src={iconTwitter} alt="트위터로 이동하기." />
          </a>
          <a href={youtube}>
            <img className="footer-icon" src={iconYoutube} alt="유튜브로 이동하기." />
          </a>
          <a href={instagram}>
            <img className="footer-icon" src={iconInstagram} alt="인스타그램으로 이동하기." />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
