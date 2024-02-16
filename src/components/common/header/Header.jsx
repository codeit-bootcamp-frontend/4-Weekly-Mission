import React from "react";
import logo from "../../../assets/svg/logo.svg";
import "./Header.css";

const Header = ({ userInfo }) => {
  const { profileImageSource, email } = userInfo;

  return (
    <header>
      <div className="wrapper">
        <a className="logo" href="/">
          <img src={logo} alt="" />
        </a>
        {userInfo.length === 0 ? (
          <a className="login-btn" href="/signin">
            로그인
          </a>
        ) : (
          <div className="profile">
            <img className="profile-img" src={profileImageSource} />
            <p className="profile-email hidden">{email}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
