import React from 'react';
import logo from '../images/logo.svg';
import './styles/header.css';

const Header = ({ user, folder }) => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" width="133" height="24" />
        </a>
        {user ? (
          <div className="profile-container">
            <img
              src={user.profileImageSource}
              alt="profileImage"
              className="profile-image"
              width="28"
              height="28"
            ></img>
            <p className="profile-email">{user.email}</p>
          </div>
        ) : (
          <a className="login" href="/">
            로그인
          </a>
        )}
      </nav>
      <div className="folder">
        <img
          src={folder.profileImageSource}
          alt="userImage"
          className="folder-user-image"
          width="60"
          height="60"
        />
        <p className="folder-user-name">@{folder.ownerName}</p>
        <p className="folder-name">{folder.folderName}</p>
      </div>
    </header>
  );
};

export default Header;
