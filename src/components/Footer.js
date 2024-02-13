import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import youtubeIcon from "../assets/youtube.svg";
import instaIcon from "../assets/instagram.svg";
import "./styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p className="copyright">©codeit - 2023</p>
      <div className="footerLink">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="sns">
        <a href="https://www.facebook.com/">
          <img
            src={facebookIcon}
            alt="facebook 홈페이지로 연결된 facebook 로고"
          />
        </a>
        <a href="https://twitter.com/">
          <img src={twitterIcon} alt="twitter 홈페이지로 연결된 twitter 로고" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={youtubeIcon} alt="youtube 홈페이지로 연결된 youtube 로고" />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src={instaIcon}
            alt="instagram 홈페이지로 연결된 instagram 로고"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
