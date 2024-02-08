import fbicon from "../assets/fbicon.svg";
import twicon from "../assets/twicon.svg";
import yticon from "../assets/yticon.svg";
import insticon from "../assets/insticon.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p className="copyright">&copy;codeit - 2023</p>
      <div className="footer-text">
        <p>Privacy Policy</p>
        <p className="faq-text">FAQ</p>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fbicon} alt={fbicon} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twicon} alt={twicon} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={yticon} alt={yticon} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insticon} alt={insticon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
