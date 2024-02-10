import React from "react";
import facebookIcon from "../../image/icons_facebook.svg";
import instagramIcon from "../../image/icons_instagram.svg";
import twitterIcon from "../../image/icons_twitter.svg";
import youtubeIcon from "../../image/icons_youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">@codeit - 2023</span>
        <div className="footer-link">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="footer-sns">
          <a
            href="https://ko-kr.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
