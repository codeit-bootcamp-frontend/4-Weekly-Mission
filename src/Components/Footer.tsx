import React from "react";
import "../Styles/Footer.css";
import facebook from "../Assets/image/facebook.svg";
import twitter from "../Assets/image/twitter.svg";
import youtube from "../Assets/image/youtube.svg";
import instagram from "../Assets/image/instagram.svg";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-copyright">©codeit - 2023</div>
          <div>
            <a className="footer-contents" href="/privacy/">
              Privacy Policy
            </a>
            <a className="footer-contents" href="/faq/">
              FAQ
            </a>
          </div>
          <div className="footer-website">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                className="footer-image"
                src={facebook}
                alt="페이스북 로고"
              />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <img className="footer-image" src={twitter} alt="트위터 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img className="footer-image" src={youtube} alt="유튜브 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className="footer-image"
                src={instagram}
                alt="인스타그램 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
