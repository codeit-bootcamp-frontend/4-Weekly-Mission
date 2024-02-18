import React from 'react';
import logo from '../../images/logo.svg';
import '../styles/header.css';
import FolderTitle from './FolderTitle';

const Header = ({ user, folder }) => {
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
      {/* <div className="folder">
        <img src={folder.profileImageSource} alt="userImage" className="folder-user-image" />
        <p className="folder-user-name">@{folder.ownerName}</p>
        <p className="folder-name">{folder.folderName}</p>
      </div> */}
      <FolderTitle folder={folder} />
    </header>
  );
};

export default Header;
