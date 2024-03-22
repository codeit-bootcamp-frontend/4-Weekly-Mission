import React from 'react';
import '../../style/footer.css';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import youtubeIcon from '../../images/youtube.svg';
import instagramIcon from '../../images/instagram.svg';

const Footer = () => {
  const SNS_LIST = [
    { name: 'facebook', href: 'https://www.facebook.com', src: facebookIcon },
    { name: 'twitter', href: 'https://twitter.com', src: twitterIcon },
    { name: 'youtube', href: 'https://youtube.com', src: youtubeIcon },
    {
      name: 'instagram',
      href: 'https://www.instagram.com',
      src: instagramIcon,
    },
  ];
  return (
    <footer className="footer">
      <p className="footer-text">@codeit - 2023</p>
      <div className="footer-link">
        <a href="/privacy">
          <p className="footer-privacy">Privacy Policy</p>
        </a>
        <a href="/FAQ">
          <p className="footer-faq">FAQ</p>
        </a>
      </div>
      <div className="footer-icon">
        {SNS_LIST.map(({ name, href, src }) => {
          return (
            <a key={name} href={href} target="_blank" rel="noreferrer">
              <img src={src} alt={`${name} icon`} width="20" height="20" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
