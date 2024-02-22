import React from "react";
import styles from "./Header.module.css";
import Profile from "./Profile";
import { Link } from "react-router-dom";

function Header({ user }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="Icons/logo.svg"
          type="image/svg+xml"
          alt="Header_logo"
        />
      </Link>
      {user ? (
        <Profile user={user} />
      ) : (
        <button className={styles.login_btn}>로그인</button>
      )}
    </header>
  );
}

export default Header;
