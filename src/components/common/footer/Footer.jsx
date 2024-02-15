import './Footer.css';
import facebookIconURL from '../../../assets/icons/akar-icons_facebook-fill.png';
import twitterIconURL from '../../../assets/icons/akar-icons_twitter-fill.png';
import youtubeIconURL from '../../../assets/icons/akar-icons_youtube-fill.png';
import instagramIconURL from '../../../assets/icons/ant-design_instagram-filled.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text-1">@codeit - 2023</div>
      <div className="footer-text-2">
        <a href="./privacy.html">
          <div>Privacy Policy</div>
        </a>
        <a href="./faq.html">
          <div>FAQ</div>
        </a>
      </div>

      <div className="footer-icon-group">
        <a href="https://www.facebook.com/?locale=ko_KR">
          <img
            className="footer-icon"
            src={facebookIconURL}
            alt="facebook icon"
          />
        </a>
        <a href="https://twitter.com/?lang=ko">
          <img
            className="footer-icon"
            src={twitterIconURL}
            alt="twitter icon"
          />
        </a>
        <a href="https://www.youtube.com/">
          <img
            className="footer-icon"
            src={youtubeIconURL}
            alt="youtube icon"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            className="footer-icon"
            src={instagramIconURL}
            alt="instagram icon"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
