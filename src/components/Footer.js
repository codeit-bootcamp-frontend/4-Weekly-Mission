import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import youtube from "../image/youtube.png";
import instagram from "../image/instagram.png";
import "../css/Footer.css";

const snsLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    image: facebook,
    alt: "facebook 홈페이지로 연결된 facebook 로고",
  },
  {
    name: "twitter",
    url: "https://twitter.com/",
    image: twitter,
    alt: "twitter 홈페이지로 연결된 twitter 로고",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    image: youtube,
    alt: "youtube 홈페이지로 연결된 youtube 로고",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    image: instagram,
    alt: "instagram 홈페이지로 연결된 instagram 로고",
  },
];

function Footer() {
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
        <div className="sns">
          {snsLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.image} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
