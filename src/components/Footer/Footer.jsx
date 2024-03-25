import React, { forwardRef } from "react";
import "./Footer.css";

const FOOTER_TEXT = {
  codeit: "©codeit - 2023",
  privacyPolicy: "Privacy Policy",
  FAQ: "FAQ",
};

const ROUTE = {
  homePage: "/",
  loginPage: "/signin",
  privacyPage: "/privacy",
  FAQ: "/faq",
};

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="Footer">
      <div className="FooterItems">
        <span className="FooterCopyright">{FOOTER_TEXT.codeit}</span>
        <div className="FooterLinks">
          <a className="FooterLink" href={ROUTE.privacyPage}>
            {FOOTER_TEXT.privacyPolicy}
          </a>
          <a className="FooterLink" href={ROUTE.FAQ}>
            {FOOTER_TEXT.FAQ}
          </a>
        </div>
        <div className="FooterSNS">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/facebook.svg" alt="facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/youtube.svg" alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
