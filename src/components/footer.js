import facebookIcon from "../icon/landing/akar-icons_facebook-fill.svg";
import twitterIcon from "../icon/landing/akar-icons_twitter-fill.svg";
import youtubeIcon from "../icon/landing/akar-icons_youtube-fill.svg";
import instagramIcon from "../icon/landing/ant-design_instagram-filled.svg";

function Footer() {
  return (
    <footer>
      <p id="codeit">©codeit - 2023</p>
      <div id="center">
        <a className="privacy" href="http://www.facebook.com">
          Privacy Policy
        </a>
        <a className="faq" href="http://www.facebook.com">
          FAQ
        </a>
      </div>
      <div id="icon">
        <a href="http://www.facebook.com">
          <img src={facebookIcon} alt="facebook" />
        </a>
        <a href="http://www.twitter.com">
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a href="http://www.youtube.com">
          <img src={youtubeIcon} alt="youtube" />
        </a>
        <a href="http://www.instagram.com">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
