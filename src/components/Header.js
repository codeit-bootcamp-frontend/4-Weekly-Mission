import React from "react";
import Account from "./Account/Account";
import logo from "../image/Linkbrary_logo.svg";
import "./Header.css";
import Folder from "./Folder/Folder";

const Header = () => {
  return (
    <header>
      <div className="nav">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary 로고" />
        </a>
        <div>
          <Account />
        </div>
      </div>
      <div className="header-content">
        <Folder />
      </div>
    </header>
  );
};

export default Header;
