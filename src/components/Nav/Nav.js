import React from "react";
import Account from "./Account";
import logo from "../../image/Linkbrary_logo.svg";

const Nav = () => {
  return (
    <header>
      <div className="header">
        <a href="/">
          <img src={logo} alt="Linkbrary 로고" />
        </a>
        <div>
          <Account />
        </div>
      </div>
    </header>
  );
};

export default Nav;
