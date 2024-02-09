import React from 'react';
import logo from '../../assets/header/logo.svg';
import profileImg from '../../assets/header/profileImg.svg';
import '../../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='HeaderContainer'>
      <div className='HeaderContent'>
        <Link to='/'>
          <img className='Logo' src={logo} alt='logo img' />
        </Link>
        <Link to='/signin'>
          <div className='ProfileContent'>
            <img className='ProfileImg' src={profileImg} alt='profile img' />
            <span>Codeit@codeit.com</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
