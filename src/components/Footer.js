import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import youtube from "../image/youtube.png";
import instagram from "../image/instagram.png";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-box">
        <span class="copyright">©codeit - 2023</span>
        <div class="footer-links">
          <a class="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a class="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div class="sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
