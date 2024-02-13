import { ROUTE }  from "../../utils/constant";
import "./Footer.css";

import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import youtubeIcon from '../../images/youtube.svg';
import instagramIcon from '../../images/instagram.svg';

const TEXT = {
    codeit: "©codeit - 2023",
    privacyPolicy: "Privacy Policy",
    faq: "FAQ",
};
  
export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">{TEXT.codeit}</span>
        <div className="Footer-links">
          <a className="Footer-link" href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className="Footer-link" href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className="Footer-sns"> 
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="facebook 홈페이지로 연결된 facebook 로고" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="instagram 홈페이지로 연결된 instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
};