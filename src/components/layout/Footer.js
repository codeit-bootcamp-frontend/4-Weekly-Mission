import React from 'react';
import '../../style/Footer.css';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='FooterContent'>
        <span>©codeit - 2023</span>
        <div className='FooterLink'>
          <a href='../Privacy.js'>Privacy Policy</a>
          <a href='../Faq.js'>FAQ</a>
        </div>
        <div className='FooterSns'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={facebook}
              alt='facebook logo'
              target='_blank'
              rel='noopener noreferrer'
            />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitter} alt='twitter logo' />
          </a>
          <a
            href='https://www.youtube.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={youtube} alt='youtube logo' />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='instagram logo' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
