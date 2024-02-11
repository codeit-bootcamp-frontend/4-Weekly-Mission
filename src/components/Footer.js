import '../style/footer.css';
import facebookIcon from '../images/facebook.svg';
import twitterIcon from '../images/twitter.svg';
import youtubeIcon from '../images/youtube.svg';
import instagramIcon from '../images/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">@codeit - 2023</p>
      <div className="footer-link">
        <a href="/privacy">
          <p className="footer-privacy">Privacy Policy</p>
        </a>
        <a href="/FAQ">
          <p className="footer-faq">FAQ</p>
        </a>
      </div>
      <div className="footer-icon">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="페이스북" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="트위터" />
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="유튜브" />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="인스타그램" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
