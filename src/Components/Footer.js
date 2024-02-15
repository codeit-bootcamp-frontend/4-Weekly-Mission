import React from "react";
import facebookImg from "../Assets/image/facebook.png";
import twitterImg from "../Assets/image/twitter.png";
import youtubeImg from "../Assets/image/youtube.png";
import instaImg from "../Assets/image/instagram.png";
import "../Styles/Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="footer-copyright">©codeit - 2023</div>
          <div>
            <a class="footer-contents" href="/privacy/">
              Privacy Policy
            </a>
            <a class="footer-contents" href="/faq/">
              FAQ
            </a>
          </div>
          <div class="footer-website">
            <a href="https://www.facebook.com/" target="_blank">
              <img class="footer-image" src={facebookImg} alt="페이스북 로고" />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <img class="footer-image" src={twitterImg} alt="트위터 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img class="footer-image" src={youtubeImg} alt="유튜브 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img class="footer-image" src={instaImg} alt="인스타그램 로고" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
