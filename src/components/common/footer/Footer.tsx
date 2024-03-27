import footerStyles from './Footer.module.css';
import facebookIcon from '../../../assets/facebook-icon.png';
import twitterIcon from '../../../assets/twitter-icon.png';
import youtubeIcon from '../../../assets/youtube-icon.png';
import instagramIcon from '../../../assets/instagram-icon.png';

function Footer() {
  return (
    <div className={footerStyles.background}>
      <div className={footerStyles.container}>
        <span className={footerStyles.copyright}>@codeit - 2023</span>
        <span className={footerStyles.policy}>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </span>
        <span className={footerStyles.snsIcon}>
          <img src={facebookIcon} alt="페이스북 아이콘" />
          <img src={twitterIcon} alt="트위터 아이콘" />
          <img src={youtubeIcon} alt="유튜브 아이콘" />
          <img src={instagramIcon} alt="인스타그램 아이콘" />
        </span>
        <div className={footerStyles.empty}></div>
      </div>
    </div>
  );
}

export default Footer;
