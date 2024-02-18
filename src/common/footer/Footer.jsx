import "./Footer.css";

import facebookImg from "../../assets/facebook-icon.png";
import twitterImg from "../../assets/twitter-icon.png";
import youtubeImg from "../../assets/youtube-icon.png";
import instagramImg from "../../assets/instagram-icon.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="copyright">©codeit - 2023</div>
      <div className="policy">
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className="sns">
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={facebookImg} alt="facebook" />
        </a>
        <a
          href="http://www.twitter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={twitterImg} alt="twitter" />
        </a>
        <a
          href="http://www.youtube.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={youtubeImg} alt="youtube" />
        </a>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={instagramImg} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
