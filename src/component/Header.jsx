import React from "react";
import logo from "../imgs/logo.svg";
import "../css/Header.css";

function Header() {
  return (
    <header className="topnav">
      <div className="topnav__size">
        <a href="/" className="topnav__logo">
          <img src={logo} alt="logo"></img>
        </a>
        <a className="topnav__loginBt" href="./login/loginin.html">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
