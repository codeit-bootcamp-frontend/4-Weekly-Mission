import { Fragment } from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-container">
            <div className="mobile-footer-content">
              <div className="footer-link">
                <a href="./privacy.html">Privacy Policy</a>
                <a href="./faq.html">FAQ</a>
              </div>
              <div className="copyright">©codeit - 2023</div>
            </div>

            <div className="pc-copyright">©codeit - 2023</div>
            <div className="pc-footer-link">
              <a href="./privacy.html">Privacy Policy</a>
              <a href="./faq.html">FAQ</a>
            </div>

            <div className="sns-icon">
              <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
                <img
                  src="./images/landing/akar-icons_facebook-fill.png"
                  alt="페이스북 아이콘"
                />
              </a>
              <a href="https://twitter.com/?lang=ko" target="_blank">
                <img
                  src="./images/landing/akar-icons_twitter-fill.png"
                  alt="트위터 아이콘"
                />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img
                  src="./images/landing/akar-icons_youtube-fill.png"
                  alt="유튜브 아이콘"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  src="./images/landing/ant-design_instagram-filled.png"
                  alt="인스타그램 아이콘"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
