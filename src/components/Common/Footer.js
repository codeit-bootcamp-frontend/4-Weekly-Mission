import React from "react";
import FacebookIcon from "../../image/icons_facebook.svg";
import InstagramIcon from "../../image/icons_instagram.svg";
import TwitterIcon from "../../image/icons_twitter.svg";
import YoutubeIcon from "../../image/icons_youtube.svg";
import "./Footer.css";

const Footer = () => {
  const SNS_ICONS = [
    {
      href: "https://ko-kr.facebook.com/",
      icon: FacebookIcon,
      alt: "facebook",
    },
    { href: "https://twitter.com", icon: TwitterIcon, alt: "twitter" },
    { href: "https://www.youtube.com/", icon: YoutubeIcon, alt: "youtube" },
    {
      href: "https://www.instagram.com/",
      icon: InstagramIcon,
      alt: "instagram",
    },
  ];

  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">@codeit - 2023</span>
        <div className="footer-link">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="footer-sns">
          {SNS_ICONS.map((sns, index) => (
            <a
              key={index}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sns.icon} alt={sns.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
