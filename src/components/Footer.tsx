import fbicon from '../assets/fbicon.svg';
import twicon from '../assets/twicon.svg';
import yticon from '../assets/yticon.svg';
import insticon from '../assets/insticon.svg';
import './Footer.css';

const SocialMediaLink = ({ url, icon }: { url: string; icon: string }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <img src={icon} alt={icon} />
    </a>
  );
};

function Footer() {
  const socialMedias = [
    { url: 'https://www.facebook.com/', icon: fbicon },
    { url: 'https://twitter.com/', icon: twicon },
    { url: 'https://www.youtube.com/', icon: yticon },
    { url: 'https://www.instagram.com/', icon: insticon },
  ];

  return (
    <footer>
      <p className='copyright'>&copy;codeit - 2023</p>
      <div className='footer-text'>
        <p>Privacy Policy</p>
        <p className='faq-text'>FAQ</p>
      </div>
      <div className='footer-icons'>
        {socialMedias.map(({ url, icon }) => (
          <SocialMediaLink key={url} url={url} icon={icon} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
