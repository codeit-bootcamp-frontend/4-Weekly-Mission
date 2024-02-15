import React from 'react';
import logo from '../../assets/Images/logo.svg';

export const MainHeader = ({ userProfile }) => {
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
    </>
  );
};
