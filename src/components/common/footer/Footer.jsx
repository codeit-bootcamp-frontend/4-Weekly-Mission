import React from "react";
import facebookIcon from "../../../assets/svg/facebook.svg";
import twitterIcon from "../../../assets/svg/twitter.svg";
import youtubeIcon from "../../../assets/svg/youtube.svg";
import instagramIcon from "../../../assets/svg/instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="copyright">©codeit - 2023</p>
      <div className="feat">
        <a className="policy" href="/privacy">
          Privacy Policy
        </a>
        <a className="faq" href="/faq">
          FAQ
        </a>
      </div>
      <ul className="sns-list">
        <li>
          <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
            <img src={facebookIcon} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/home" target="_blank">
            <img src={twitterIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
