import styles from './Footer.module.scss';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import youtubeIcon from '../../images/youtube.svg';
import instagramIcon from '../../images/instagram.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>@codeit - 2023</p>
      <div className={styles.footerLink}>
        <Link to="/privacy">
          <p className={styles.footerPrivacy}>Privacy Policy</p>
        </Link>
        <Link to="/FAQ">
          <p className={styles.footerFaq}>FAQ</p>
        </Link>
      </div>
      <div className={styles.footIcon}>
        <Link to="https://facebook.com/">
          <img src={facebookIcon} alt="페이스북" />
        </Link>
        <Link to="https://twitter.com/">
          <img src={twitterIcon} alt="트위터" />
        </Link>
        <Link to="https://youtube.com/">
          <img src={youtubeIcon} alt="유튜브" />
        </Link>
        <Link to="https://instagram.com/">
          <img src={instagramIcon} alt="인스타그램" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
