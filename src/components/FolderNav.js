import React from 'react';
import FolderProfile from './FolderProfile';
import logo from '../images/logo.svg';
import '../style/folderheader.css';

const FolderNav = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
      </div>
      <div className="header-content">
        <FolderProfile />
      </div>
    </header>
  );
};

export default FolderNav;
