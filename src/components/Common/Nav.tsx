import React from "react";
import Account from "../Account";
import logoImage from "../../image/Linkbrary_logo.svg";
import "./Nav.css";

interface NavProps {
  sticky: boolean;
}

const Nav = ({ sticky }: NavProps) => {
  const navClass = sticky ? "nav sticky" : "nav static";

  return (
    <div className={navClass}>
      <a href="/">
        <img className="logo-image" src={logoImage} alt="Linkbrary 로고" />
      </a>
      <div>
        <Account />
      </div>
    </div>
  );
};

export default Nav;
