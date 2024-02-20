import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import facebook from '../../assets/images/akar-icons_facebook-fill.svg';
import twitter from '../../assets/images/akar-icons_twitter-fill.svg';
import youtube from '../../assets/images/akar-icons_youtube-fill.svg';
import instagram from '../../assets/images/ant-design_instagram-filled.svg';

function Footer() {
  const socialLinks = [
    { id: 1, src: facebook, alt: 'facebook', href: 'https://www.facebook.com/' },
    { id: 2, src: twitter, alt: 'twitter', href: 'https://twitter.com/' },
    { id: 3, src: youtube, alt: 'youtube', href: 'https://www.youtube.com/' },
    { id: 4, src: instagram, alt: 'instagram', href: 'https://www.instagram.com/' },
  ];

  const footerClasses = classNames(styles.footer, 'flex-row', 'position-relative', 'background-black', 'width-full');
  const copyrightClasses = classNames(styles.copyright);
  const officialLinkClasses = classNames(styles['official-link'], 'flex-row');
  const socialLinkClasses = classNames(styles['social-link'], 'flex-row');
  const socialLinkImgClasses = classNames(styles['social-link-icon']);

  return (
    <footer className={footerClasses}>
      <div className={copyrightClasses}>©codeit - 2023</div>
      <div className={officialLinkClasses}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={socialLinkClasses}>
        {socialLinks.map((link) => (
          <Link to={link.href} key={link.id} target="_blank">
            <img className={socialLinkImgClasses} src={link.src} alt={link.alt} />
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
