import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import "./AppFooter.css";
const socialMediaLinks = [
  {
    href: "https://www.facebook.com/",
    src: facebook,
    alt: "facebook 홈페이지로 연결된 facebook 로고",
  },
  {
    href: "https://twitter.com/",
    src: twitter,
    alt: "twitter",
  },
  {
    href: "https://www.youtube.com/",
    src: youtube,
    alt: "youtube 홈페이지로 연결된 youtube 로고",
  },
  {
    href: "https://www.instagram.com/",
    src: instagram,
    alt: "instagram 홈페이지로 연결된 instagram 로고",
  },
];

const socialMediaIcons = socialMediaLinks.map((link, index) => (
  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
    <img src={link.src} alt={link.alt} />
  </a>
));

function AppFooter() {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">{socialMediaIcons}</div>
      </div>
    </footer>
  );
}

export default AppFooter;
