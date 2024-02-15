import iconFacebook from '../assets/logo/facebook.svg';
import iconTwitter from '../assets/logo/twitter.svg';
import iconInstargram from '../assets/logo/youtube.svg'
import iconYoutube from '../assets/logo/youtube.svg';
import '../styles/footer.css';

const Footer = () => {
  const facebook = 'https://www.facebook.com/?locale=ko_KR';
  const twitter = 'https://twitter.com/?lang=ko';
  const youtube = 'https://www.youtube.com/';
  const instagram = 'https://www.instagram.com/';


  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link privacy" href="privacy.html">Privacy Policy</a>
          <a className="footer-link faq" href="faq.html">FAQ</a>
        </div>
        <div className="sns">
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="facebook 홈페이지로 연결된 facebook 로고" />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <img src={iconTwitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <img src={iconYoutube} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={iconInstargram} alt="instagram 홈페이지로 연결된 instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );

}

export default Footer;