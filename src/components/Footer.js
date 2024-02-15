import "../assets/styles/Footer.css";
import facebookImg from "../assets/images/akar-icons_facebook-fill.svg";
import instagramImg from "../assets/images/ant-design_instagram-filled.svg";
import youtubeImg from "../assets/images/akar-icons_youtube-fill.svg";
import twitterImg from "../assets/images/akar-icons_twitter-fill.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a className="copyright">©codeit - 2023</a>
        <div className="links">
          <a href="/privacy">Privacy Policy</a> <a href="/faq">FAQ</a>
        </div>

        <div className="sns">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebookImg} alt="facebookImg" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={twitterImg} alt="twitterImg" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeImg} alt="youtubeImg" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramImg} alt="instagramImg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;