import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchUserData } from "services/api";
import styles from "./navbar.module.css";
import Profile from "./Profile/Profile";
import { GetUserResponse } from "types/apis";
import logoImage from "assets/images/logo.svg";

function Navbar() {
  const id = "1";
  const [user, setUser] = useState<GetUserResponse>();

  useEffect(() => {
    fetchUserData(id)
      .then((data) => {
        const [userInfo] = data;
        setUser(userInfo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrap}>
        <NavLink to="/">
          <img src={logoImage} className={styles.logo} alt="로고" />
        </NavLink>
        {user ? (
          <NavLink to="/mypage">
            <Profile email={user.email} imgUrl={user.image_source} />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button>로그인</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
