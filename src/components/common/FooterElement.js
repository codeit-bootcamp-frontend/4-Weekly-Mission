import facebookIcon from "../../assets/icons/icon_facebook.png";
import twitterIcon from "../../assets/icons/icon_twitter.png";
import youtubeIcon from "../../assets/icons/icon_youtube.png";
import instagramIcon from "../../assets/icons/icon_instagram.png";

import "../../styles/common.css";

function FooterElement() {
  return (
    <footer>
      <div className="footer-frame">
        <div id="footer-codeit">
          <p>@codeit - 2023</p>
        </div>
        <div id="footer-notice">
          <a href="privacy.html">
            <p>Privacy Policy</p>
          </a>
          <a href="faq.html">
            <p>FAQ</p>
          </a>
        </div>
        <div id="footer-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="facebook_icon"></img>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="twitter`_icon"></img>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="youtube_icon"></img>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="instagram_icon"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterElement;
