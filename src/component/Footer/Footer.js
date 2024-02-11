import "./Footer.css";
import facebookIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/instagram.svg";
import youtubeIcon from "../../images/youtube.svg";
import instagramICon from "../../images/instagram.svg";

const FACEBOOK = "https://www.facebook.com/";
const TWITTER = "https://www.twitter.com/";
const YOUTUBE = "https://www.youtube.com/";
const INSTAGRAM = "https://www.instagram.com/";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Wrap">
        <span className="Address">©codeit - 2023</span>
        <div className="Policy-and-faq">
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </div>
        <div className="Sns">
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
            <img
              src={facebookIcon}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a href={TWITTER} target="_blank" rel="noopener noreferrer">
            <img
              src={twitterIcon}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">
            <img
              src={youtubeIcon}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <img
              src={instagramICon}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
