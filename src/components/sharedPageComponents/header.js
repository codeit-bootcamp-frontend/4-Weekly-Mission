import React from 'react';
import logo from '../../assets/Images/logo.svg';

export default function Header({ userProfile, folder }) {
  return (
    <>
      <nav>
        <div className="menu">
          <a href="">
            <img
              src={logo}
              className="main-logo"
              alt="logo"
              width="133"
              height="24"
            />
          </a>
          {userProfile ? (
            <div className="user-profile">
              <img
                src={userProfile.image}
                alt="userImage"
                className="profile-image"
                width="28"
                height="28"
              ></img>
              <p className="profile-email">{userProfile.email}</p>
            </div>
          ) : (
            <a className="login button" href="/pages/signin.html">
              로그인
            </a>
          )}
        </div>
      </nav>
      <div className="folder">
        <img
          src={folder.userImage}
          alt="UserImage"
          className="folder-user-image"
          width="60"
          height="60"
        ></img>
        <p className="folder-user-name">{folder.userName}</p>
        <p className="folder-folder-name">{folder.name}</p>
      </div>
    </>
  );
}
