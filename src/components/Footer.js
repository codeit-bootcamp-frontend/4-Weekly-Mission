import '../css/Footer.css';
import facebookImg from '../images/facebook.png';
import twitterImg from '../images/twitter.png';
import youtubeImg from '../images/youtube.png';
import instagramImg from '../images/instagram.png';

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="/privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="/faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookImg} alt="facebook 로고" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterImg} alt="twitter 로고" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeImg} alt="youtube 로고" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramImg} alt="instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
