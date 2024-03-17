import "./Footer.css";
import { Link } from "react-router-dom";

const FOOTER_DATA = [
  {
    alt: "redirectFacebook",
    href: "https://www.facebook.com/",
    imgUrl: "footer_facebook.png",
  },
  {
    alt: "redirectTwitter",
    href: "https://twitter.com/",
    imgUrl: "footer_X.png",
  },
  {
    alt: "redirectYoutube",
    href: "https://www.youtube.com/",
    imgUrl: "footer_youtube.png",
  },
  {
    alt: "redirectInstagram",
    href: "https://www.instagram.com",
    imgUrl: "footer_instagram.png",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="corporate-information">©codeit - 2023</div>
      <div className="footer-privacy">
        <a href="pages/privacy.html">Privacy Policy</a>
        <a href="pages/faq.html">FAQ</a>
      </div>
      <div className="footer-social">
        {FOOTER_DATA.map((item) => (
          <Link key={item.alt} to={item.href} target="_blank">
            <img src={item.imgUrl} alt={item.alt} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
