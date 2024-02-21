import "./Footer.css";
import facebookIcon from "../../assets/images/facebook-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";
import youtubeIcon from "../../assets/images/youtube-icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="mobile-footer-content">
            <div className="footer-link">
              <a href="./privacy.html">Privacy Policy</a>
              <a href="./faq.html">FAQ</a>
            </div>
            <div className="copyright">©codeit - 2023</div>
          </div>

          <div className="pc-copyright">©codeit - 2023</div>
          <div className="pc-footer-link">
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./faq.html">FAQ</a>
          </div>

          <div className="sns-icon">
            <a
              href="https://www.facebook.com/?locale=ko_KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="페이스북 아이콘" />
            </a>
            <a
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="트위터 아이콘" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="유튜브 아이콘" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="인스타그램 아이콘" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
