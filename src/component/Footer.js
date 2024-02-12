import "../style/footer.css";
import facebookIcon from "../image/facebook.svg";
import twitterIcon from "../image/twitter.svg";
import youtubeIcon from "../image/youtube.svg";
import instagramIcon from "../image/instagram.svg";

function Footer() {
  return (
    <footer>
      <div class="footer_frame">
        <div class="maker">©codeit - 2023</div>
        <div class="sub">
          <a href="./privacy.html">Privacy Policy</a>
          <a href="./faq.html">FAQ</a>
        </div>
        <div class="icons">
          <a href="https://www.facebook.com/">
            <img class="icon" src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://twitter.com/home?lang=ko">
            <img class="icon" src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img class="icon" src={youtubeIcon} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/">
            <img class="icon" src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
