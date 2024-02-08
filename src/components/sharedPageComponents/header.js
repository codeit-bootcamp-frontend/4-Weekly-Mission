import React from 'react';
import logo from '../../assets/Images/logo.svg';

export default function Header({ userProfile, folder }) {
  return (
    <>
      <nav>
        <div className="menu">
          <a href="">
            <img src={logo} className="main-logo" alt="logo" />
          </a>
          <div className="user-profile">
            <img
              src={userProfile.image}
              alt="userImage"
              className="profile-image"
            ></img>
            <p className="profile-email">{userProfile.email}</p>
          </div>
        </div>
      </nav>
      <div className="folder">
        <img
          src={folder.userImage}
          alt="UserImage"
          className="folder-user-image"
        ></img>
        <p className="folder-user-name">{folder.userName}</p>
        <p className="folder-folder-name">{folder.name}</p>
      </div>
    </>
  );
}
