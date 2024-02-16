import facebook from '../images/akar-icons_facebook-fill.svg';
import twitter from '../images/akar-icons_twitter-fill.svg';
import youtube from '../images/akar-icons_youtube-fill.svg';
import instagram from '../images/ant-design_instagram-filled.svg';

import '../App.css';
import '../style/shared.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer1">
        <p>©codeit - 2023</p>
      </div>
      <div className="footer2">
        <a href="/privacy">
          <p>Privacy Policy</p>
        </a>
        <a href="/faq">
          <p>FAQ</p>
        </a>
      </div>
      <div className="footer3">
        <img src={facebook} alt="페이스북 로고" />
        <img src={twitter} alt="트위터 로고" />
        <img src={youtube} alt="유튜브 로고" />
        <img src={instagram} alt="인스타그램 로고" />
      </div>
    </footer>
  );
}
