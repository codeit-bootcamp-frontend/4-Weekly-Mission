import React from "react";
import "./css/Header.css";
import Profile from "./Profile";

function Header({ email, profileImageSource }) {
  return (
    <header>
      <a href="/">
        <img
          src="Icons/logo.svg"
          type="image/svg+xml"
          alt="Header_logo"
        />
      </a>
      {email ? (
        <Profile
          email={email}
          profileImageSource={profileImageSource}
        />
      ) : (
        <button className="login_btn">로그인</button>
      )}
    </header>
  );
}

export default Header;
