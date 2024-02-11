import "./css/Footer.css";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";

function Footer() {
  return (
    <footer>
      <div class="footer-in-div">
        <div class="left">©codeit - 2023</div>
        <div class="center">
          <span class="grid-left"> Privacy Policy </span>
          <span class="grid-center"> FAQ </span>
        </div>
        <div class="right">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
