import React from 'react';
import logo from '../../assets/header/logo.svg';
import profileImg from '../../assets/header/profileImg.svg';
import '../../style/Header.css';

const Header = () => {
  return (
    <div className='HeaderContainer'>
      <div className='HeaderContent'>
        <a href='/'>
          <img className='Logo' src={logo} alt='logo img' />
        </a>
        <a href='/src/components/Signin.js'>
          <div className='ProfileContent'>
            <img className='ProfileImg' src={profileImg} alt='profile img' />
            <span>Codeit@codeit.com</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
