import React from "react";
import "./Css/Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer_text">©codeit - 2023</p>
      <div className="footer_link">
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="Icons/facebook_logo.png" alt="facebook_link" />
        </a>
        <a href="https://twitter.com/?lang=ko" target="_blank">
          <img src="Icons/twitter_logo.png" alt="twitter_link" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="Icons/youtube_logo.png" alt="youtube_link" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="Icons/instagram_logo.png" alt="instagram_link" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
