import React from 'react';
import logo from '../../images/logo.svg';
import '../styles/header.css';
import FolderTitle from './FolderTitle';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  return (
    <header>
      <nav>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        {user ? (
          <div className="profile-container">
            <img src={user.profileImageSource} alt="profileImage" className="profile-image"></img>
            <p className="profile-email">{user.email}</p>
          </div>
        ) : (
          <a className="login" href="/">
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
