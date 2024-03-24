import styles from '../styles/Footer.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import iconFacebook from '../assets/icons/facebook.svg';
import iconTwitter from '../assets/icons/twitter.svg';
import iconYoutube from '../assets/icons/youtube.svg';
import iconInstagram from '../assets/icons/instagram.svg';

const Footer = () => {
  const facebook = 'https://www.facebook.com/?locale=ko_KR';
  const twitter = 'https://twitter.com/?lang=ko';
  const youtube = 'https://www.youtube.com/';
  const instagram = 'https://www.instagram.com/';

  return (
    <footer>
      <div className={cn('footer-container')}>
        <p className={cn('footer-company')}>©codeit - 2023</p>
        <div className={cn('footer-privacy-faq')}>
          <a className={cn('privacy')} href="/pages/privacy.html">
            Privacy Policy
          </a>
          <a className={cn('faq')} href="/pages/faq.html">
            FAQ
          </a>
        </div>
        <div className={cn('footer-icons')}>
          <a href={facebook}>
            <img className={cn('footer-icon')} src={iconFacebook} alt="페이스북으로 이동하기." />
          </a>
          <a href={twitter}>
            <img className={cn('footer-icon')} src={iconTwitter} alt="트위터로 이동하기." />
          </a>
          <a href={youtube}>
            <img className={cn('footer-icon')} src={iconYoutube} alt="유튜브로 이동하기." />
          </a>
          <a href={instagram}>
            <img className={cn('footer-icon')} src={iconInstagram} alt="인스타그램으로 이동하기." />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
