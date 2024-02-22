import "./Footer.css";
import facebookIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/twitter.svg";
import youtubeIcon from "../../images/youtube.svg";
import instagramIcon from "../../images/instagram.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div>©codeit - 2023</div>
      <span>Privacy Policy</span>
      <span>FAQ</span>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="페이스북 아이콘" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="트위터 아이콘" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <img src={youtubeIcon} alt="유튜브 아이콘" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="인스타그램 아이콘" />
      </a>
    </div>
  );
};

export default Footer;
