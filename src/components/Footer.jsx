import facebookImg from '../assets/sns-facebook.png';
import twitterImg from '../assets/sns-twitter.png';
import youtubeImg from '../assets/sns-youtube.png';
import instargramImg from '../assets/sns-instargram.png';

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="footer-box">
          <div className="footer-item copyright">©codeit - 2023</div>
          <div className="footer-item privacy">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-item sns">
            <a href="https://www.facebook.com/">
              <img src={facebookImg} alt="facebook" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitterImg} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtubeImg} alt="youtube" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instargramImg} alt="instargram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
