import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import "../style/footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-codeit">©codeit - 2023</p>
      <div className="footer-link">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="footer-sns">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="youtube" />
        <img src={youtube} alt="youtube" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
}
export default Footer;
