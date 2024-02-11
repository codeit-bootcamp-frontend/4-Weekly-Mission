import "../../style/landing.css";
import socialImg from "../../assets/socials.svg";

const SOCIAL_IMAGE = socialImg;

export function Footer() {
  return (
    <div className="footer-box">
      <p>©codeit - 2023</p>
      <div>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div>
        <img src={SOCIAL_IMAGE} alt="socialImage" />
      </div>
    </div>
  );
}

export default Footer;
