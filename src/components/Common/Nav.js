import React from "react";
import Account from "../Account";
import logo from "../../image/Linkbrary_logo.svg";
import "./Nav.css";

const Nav = ({ sticky }) => {
  const navClass = sticky ? "nav sticky" : "nav static";

  return (
    <div className={navClass}>
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
