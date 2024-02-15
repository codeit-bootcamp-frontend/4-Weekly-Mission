import React from 'react';
import facebook from '../../assets/Images/facebook_icon.svg';
import twitter from '../../assets/Images/twitter_icon.svg';
import youtube from '../../assets/Images/youtube_icon.svg';
import instagram from '../../assets/Images/instagram-icon.svg';

export const MainFooter = () => {
  const SNS_ICON = [
    {
      href: 'https://www.facebook.com',
      src: facebook,
      alt: 'facebook icon',
    },
    {
      href: 'https://twitter.com',
      src: twitter,
      alt: 'twitter icon',
    },
    {
      href: 'https://youtube.com',
      src: youtube,
      alt: 'youtube icon',
    },
    {
      href: 'https://www.instagram.com',
      src: instagram,
      alt: 'instagram icon',
    },
  ];
  return (
    <>
      <footer>
        <div className="footer-banner">
          <div className="copyright">
            <p>&copy;codeit - 2023</p>
          </div>
          <div className="description">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-icon">
            {SNS_ICON.map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noreferrer">
                <img src={src} alt={alt} width="20" height="20"></img>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
