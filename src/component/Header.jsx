import React, { useState } from "react";
import logo from "../imgs/logo.svg";
import "../css/Header.css";
import ProfileComponent from "./ProfileComponent";

function Header() {
  const [showProfile, setShowProfile] = useState(false);

  const handleLoginClick = () => {
    setShowProfile(true);
  };

  return (
    <header className="topnav">
      <div className="topnav__size">
        <a href="/" className="topnav__logo">
          <img src={logo} alt="logo"></img>
        </a>
        {showProfile ? (
          <ProfileComponent />
        ) : (
          <button onClick={handleLoginClick} className="topnav__loginBt">
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
