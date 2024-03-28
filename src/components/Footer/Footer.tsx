import facebook from './images/akar-icons_facebook-fill.svg';
import twitter from './images/akar-icons_twitter-fill.svg';
import youtube from './images/akar-icons_youtube-fill.svg';
import instagram from './images/ant-design_instagram-filled.svg';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footerShared">
      <div className="footerDate">
        <p>©codeit - 2023</p>
      </div>
      <div className="footerLink">
        <Link to="/privacy">
          <p>Privacy Policy</p>
        </Link>
        <Link to="/faq">
          <p>FAQ</p>
        </Link>
      </div>
      <div className="footerLogo">
        <img src={facebook} alt="페이스북 로고" />
        <img src={twitter} alt="트위터 로고" />
        <img src={youtube} alt="유튜브 로고" />
        <img src={instagram} alt="인스타그램 로고" />
      </div>
    </footer>
  );
}
