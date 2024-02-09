import React from 'react';
import '../../style/Footer.css';
import facebook from '../../assets/footer/facebook.svg';
import twitter from '../../assets/footer/twitter.svg';
import youtube from '../../assets/footer/youtube.svg';
import instagram from '../../assets/footer/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='FooterContent'>
        <span>©codeit - 2023</span>
        <div className='FooterLink'>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/faq'>FAQ</Link>
        </div>
        <div className='FooterSns'>
          <Link to='https://www.facebook.com/' target='_blank'>
            <img src={facebook} alt='facebook logo' />
          </Link>
          <Link to='https://twitter.com/' target='_blank'>
            <img src={twitter} alt='twitter logo' />
          </Link>
          <Link to='https://www.youtube.com/' target='_blank'>
            <img src={youtube} alt='youtube logo' />
          </Link>
          <Link to='https://www.instagram.com/' target='_blank'>
            <img src={instagram} alt='instagram logo' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
