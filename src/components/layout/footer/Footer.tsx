import styles from './Footer.module.css';
import IconWithLink from './IconWithLink';
import facebookIcon from '../../../assets/facebook.svg';
import twitterIcon from '../../../assets/twitter.svg';
import youtubeIcon from '../../../assets/youtube.svg';
import instagramIcon from '../../../assets/instagram.svg';

export interface Item {
  name: string,
  address: string,
  imgUrl?: string
}

const SNS_ITEMS:Item[] = [
  {
    name: 'facebook',
    address: 'https://www.facebook.com/',
    imgUrl: facebookIcon,
  },
  {
    name: 'twitter',
    address: 'https://twitter.com/',
    imgUrl: twitterIcon,
  },
  {
    name: 'youtube',
    address: 'https://www.youtube.com/',
    imgUrl: youtubeIcon,
  },
  {
    name: 'instagram',
    address: 'https://www.instagram.com/',
    imgUrl: instagramIcon,
  },
];

const LINK_ITEMS = [
  {
    name: 'Privacy Policy',
    address: '/privacy',
  },
  {
    name: 'FAQ',
    address: '/faq',
  },
];

function Footer() {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.footerGroup}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <ul className={styles.linkList}>
          {LINK_ITEMS.map(({ name, address }) => (
            <IconWithLink key={name} name={name} address={address} />
          ))}
        </ul>
        <ul className={styles.snsList}>
          {SNS_ITEMS.map(({ name, address, imgUrl }) => (
            <IconWithLink key={name} name={name} address={address} imgUrl={imgUrl} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
