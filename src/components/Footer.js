import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerFrame">
        <div className="footerItems">
          <span>©codeit - 2024</span>
          <div className="footerLink">
            <a href="/">Privacy Policy</a>
            <a href="/">FAQ</a>
          </div>
          <div className="sns">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook 홈페이지로 연결된 facebook 로고" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram 홈페이지로 연결된 instagram 로고" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
