import { Link } from 'react-router-dom';
import { HREF } from '../utils/constants';
import Icon from './ui/Icon';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import twitterIcon from '../assets/twitter.png';
import './Footer.css';

const Icons = [
  {
    src: facebookIcon,
    alt: 'facebook',
    link: HREF.FACEBOOK,
  },
  {
    src: twitterIcon,
    alt: 'twitter',
    link: HREF.TWITTER,
  },
  {
    src: youtubeIcon,
    alt: 'youtube',
    link: HREF.YOUTUBE,
  },
  {
    src: instagramIcon,
    alt: 'instagram',
    link: HREF.INSTAGRAM,
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='company'>©codeit - 2023</div>
      <div className='footer-menu'>
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/faq'>FAQ</Link>
      </div>
      <div className='footer-icon'>
        {Icons.map((icon, index) => (
          <Icon
            key={index}
            src={icon.src}
            alt={icon.alt}
            link={icon.link}
            className={icon.alt}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
