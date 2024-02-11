import './footer.css';
import YoutubeIcon from '../../../assets/icons/akar-icons-youtube-fill.svg';
import TwitterIcon from '../../../assets/icons/akar-icons-twitter-fill.svg';
import FacebookIcon from '../../../assets/icons/akar-icons-facebook-fill.svg';
import InstagramIcon from '../../../assets/icons/ant-design-instagram-filled.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">©codeit - 2023</div>
      <ul className="footer-center">
        <li>
          <a href="/privacy.html">Privacy Policy</a>
        </li>
        <li>
          <a href="/faq.html">FAQ</a>
        </li>
      </ul>
      <ul className="footer-right">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={FacebookIcon} alt="Facebook icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt="Twitter icon" />
          </a>
        </li>
        <li>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src={YoutubeIcon} alt="YouTube icon" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={InstagramIcon} alt="Instagram icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
