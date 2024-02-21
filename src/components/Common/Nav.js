import React from "react";
import Account from "../Account/Account";
import logo from "../../image/Linkbrary_logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <a href="/">
        <img className="logo" src={logo} alt="Linkbrary 로고" />
      </a>
      <div>
        <Account />
      </div>
    </div>
  );
};

export default Nav;
