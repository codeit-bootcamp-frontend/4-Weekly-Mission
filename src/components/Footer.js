import "./Footer.css";
import facebook from "../assets/images/akar-icons_facebook-fill.svg";
import twitter from "../assets/images/akar-icons_twitter-fill.svg";
import youtube from "../assets/images/akar-icons_youtube-fill.svg";
import instagram from "../assets/images/ant-design_instagram-filled.svg";

function Footer() {
  return (
    <footer className="footer flex-row position-relative background-black width-full">
      <div className="copyright">©codeit - 2023</div>
      <div className="official-link flex-row">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="social-link flex-row">
        <img className="social-link-icon" src={facebook}></img>
        <img className="social-link-icon" src={twitter}></img>
        <img className="social-link-icon" src={youtube}></img>
        <img className="social-link-icon" src={instagram}></img>
      </div>
    </footer>
  );
}

export default Footer;
