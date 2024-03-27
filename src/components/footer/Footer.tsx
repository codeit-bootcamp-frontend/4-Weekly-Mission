import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';
import FacebookLogo from '../../assets/icons/facebook.svg';
import TwitterLogo from '../../assets/icons/twitter.svg';
import YoutubeLogo from '../../assets/icons/youtube.svg';
import InstagramLogo from '../../assets/icons/instagram.svg';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <Link className="footer-link" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="footer-link" to="/faq">
            FAQ
          </Link>
        </div>
        <div className="sns">
          <Link to="https://www.facebook.com/">
            <img src={FacebookLogo} alt="facebook 홈페이지로 연결된 facebook 로고" />
          </Link>
          <Link to="https://twitter.com/">
            <img src={TwitterLogo} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </Link>
          <Link to="https://www.youtube.com/">
            <img src={YoutubeLogo} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src={InstagramLogo} alt="instagram 홈페이지로 연결된 instagram 로고" />
          </Link>
        </div>
      </div>
    </S.Container>
  );
};

export default Footer;
