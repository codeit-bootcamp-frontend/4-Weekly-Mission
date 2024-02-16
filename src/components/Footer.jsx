import facebookImg from '../assets/sns-facebook.svg';
import twitterImg from '../assets/sns-twitter.svg';
import youtubeImg from '../assets/sns-youtube.svg';
import instargramImg from '../assets/sns-instargram.svg';
import style from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer>
      <div id={style.footer}>
        <div className={style.footerBox}>
          <div className={`${style.copyright}`}>©codeit - 2023</div>
          <div className={`${style.privacy}`}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div>
            <ul className={`${style.sns}`}>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={facebookImg} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <img src={twitterImg} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img src={youtubeImg} alt="youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img src={instargramImg} alt="instargram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
