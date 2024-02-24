import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import youtubeLogo from '../assets/youtube.svg';
import instagramLogo from '../assets/instagram.svg';

import './Footer.css'

const SOCIAL_MEDIA_LINKS = Object.freeze([
  { href: 'https://www.facebook.com/', src: facebookLogo, alt: 'Facebook logo connected to Facebook homepage' },
  { href: 'https://twitter.com/', src: twitterLogo, alt: 'Twitter logo linked to Twitter homepage' },
  { href: 'https://www.youtube.com/', src: youtubeLogo, alt: 'YouTube logo linked to YouTube homepage' },
  { href: 'https://www.instagram.com/', src: instagramLogo, alt: 'Instagram logo linked to Instagram homepage' }
]);

const Footer = () => {
  return (
  <footer className='container-footer'>
    <div className='footer_ly'>
      <div className='footer'>
        <span className='codeit social-logo_text'>©codeit - 2023</span>
        <div className='policy policy_ly'>
          <span className='social-logo_text'>Privacy Policy</span>
          <span className='social-logo_text'>FAQ</span>
        </div>
        <div className='social-logo social-logo_ly'>
        {SOCIAL_MEDIA_LINKS.map(({ href, src, alt }) => (
          <a key={href} href={href} className="social-logo_hypl">
            <img src={src} alt={alt} />
          </a>
        ))}
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;