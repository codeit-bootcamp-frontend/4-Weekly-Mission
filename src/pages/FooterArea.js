import './FooterArea.css';
import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import youtubeIcon from '../assets/icon-youtube.svg';
import instargramIcon from '../assets/icon-instargram.svg';

const SnsIconArea = () => {
  return (
    <div className="sns_icon_area">
      <img src={facebookIcon} alt="facebook" />
      <img src={twitterIcon} alt="twitter" />
      <img src={youtubeIcon} alt="youtube" />
      <img src={instargramIcon} alt="instargram" />
    </div>
  );
};

const LinkArea = () => {
  return (
    <div className="link_area">
      <a href="./PrivacyPolicy" className="link_text">
        Privacy Policy
      </a>
      <a href="./Faq" className="link_text">
        FAQ
      </a>
    </div>
  );
};

const Copyright = () => {
  return <p className="copyright">©codeit - 2023</p>;
};

const FirstArea = () => {
  return (
    <div className="first_area">
      <LinkArea></LinkArea>
      <Copyright></Copyright>
    </div>
  );
};

const FooterArea = () => {
  return (
    <div className="footer_area">
      <FirstArea></FirstArea>

      <SnsIconArea></SnsIconArea>
    </div>
  );
};

export default FooterArea;
