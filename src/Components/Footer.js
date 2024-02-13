import facebookLogo from "../img/facebook.svg";
import twitterLogo from "../img/twitter.svg";
import youtubeLogo from "../img/youtube.svg";
import instagramLogo from "../img/instagram.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div>
        <span className="info-title">@codeit - 2023</span>
        <div className="footer-link">
          <a href="../pages/privacy.html">Privacy Policy</a>
          <a href="../pages/faq.html">FAQ</a>
        </div>
        <div className="footer-link media_button_container">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="footer-sns-button"
              src={facebookLogo}
              alt="페이스북 아이콘"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="footer-sns-button"
              src={twitterLogo}
              alt="트위터 아이콘"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="footer-sns-button"
              src={youtubeLogo}
              alt="유튜브 아이콘"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="footer-sns-button"
              src={instagramLogo}
              alt="인스타그램 아이콘"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
