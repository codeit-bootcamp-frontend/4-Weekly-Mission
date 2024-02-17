import "./Footer.css";
import facebookIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/twitter.svg";
import youtubeIcon from "../../images/youtube.svg";
import instagramIcon from "../../images/instagram.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div>©codeit - 2023</div>
      <a href="#">Privacy Policy</a>
      <a href="#">FAQ</a>
      <a href="https://facebook.com" target="_blank">
        <img src={facebookIcon} />
      </a>
      <a href="https://twitter.com" target="_blank">
        <img src={twitterIcon} />
      </a>
      <a href="https://youtube.com" target="_blank">
        <img src={youtubeIcon} />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src={instagramIcon} />
      </a>
    </div>
  );
};

export default Footer;
