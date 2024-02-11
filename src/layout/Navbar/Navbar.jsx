import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logoImg from "./../../assets/images/logo.svg";
import { fetchUserData } from "../../services/api";
import Profile from "./Profile/Profile";

/**
 * @todo 버튼 컴포넌트로 변경
 */
function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrap}>
        <NavLink to="/">
          <img src={logoImg} className={styles.logo} />
        </NavLink>
        <NavLink to="#">{user ? <Profile email={user.email} imgUrl={user.profileImageSource} /> : <button>login</button>}</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
