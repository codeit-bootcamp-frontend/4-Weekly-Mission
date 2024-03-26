import insta from "../assets/ant-design_instagram-filled.png";
import youtube from "../assets/akar-icons_youtube-fill.png";
import twitter from "../assets/akar-icons_twitter-fill.png";
import facebook from "../assets/akar-icons_facebook-fill.png";
import { useMediaQuery } from "react-responsive";
import "./Footer.css";
function Footer() {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  return (
    <footer className={isTablet ? "footer-tablet" : "footer"}>
      <div className="footer-container">
        <div>©codeit - 2023</div>
        <div className="policy-faq">
          <a href="/">
            <span>Privacy Policy</span>
          </a>
          <a href="/">
            <span>FAQ</span>
          </a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="facebook"></img>
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="twitter"></img>
          </a>
          <a href="https://www.youtube.com">
            <img src={youtube} alt="youtube"></img>
          </a>
          <a href="https://www.instagram.com">
            <img src={insta} alt="insta"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
