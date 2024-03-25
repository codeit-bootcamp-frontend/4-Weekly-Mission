import React from 'react';
import '../../style/header.css';
import Profile from './Profile';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
      </div>
      <div className="header-content">
        <Profile />
      </div>
    </header>
  );
};

export default Header;
