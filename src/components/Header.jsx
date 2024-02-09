import React from "react";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <a href="/">
        <img src="Icons/logo.svg" type="image/svg+xml" alt="Header_logo" />
      </a>
      <button className="login_btn">로그인</button>
    </header>
  );
}

export default Header;
