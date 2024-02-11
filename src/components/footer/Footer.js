import "./Footer.css";

import facebookImg from "../../assets/akar-icons_facebook-fill.png";
import twitterImg from "../../assets/akar-icons_twitter-fill.png";
import youtubeImg from "../../assets/akar-icons_youtube-fill.png";
import instagramImg from "../../assets/ant-design_instagram-filled.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="copyright">©codeit - 2023</div>
      <div className="policy">
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className="sns">
        <a href="http://www.facebook.com" target="_blank">
          <img src={facebookImg} alt="facebook" />
        </a>
        <a href="http://www.twitter.com" target="_blank">
          <img src={twitterImg} alt="twitter" />
        </a>
        <a href="http://www.youtube.com" target="_blank">
          <img src={youtubeImg} alt="youtube" />
        </a>
        <a href="http://www.instagram.com" target="_blank">
          <img src={instagramImg} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
