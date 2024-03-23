import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Profile from "./Profile/Profile";
import { GetUserResponse } from "types/apis";
import logoImage from "assets/images/logo.svg";
import { fetchGetSampleUsers } from "utils/hooks/useGetSampleData";

function Navbar() {
  const [user, setUser] = useState<GetUserResponse>();

  const setLocalStorage = (key: string, val: number): void =>
    localStorage.setItem(key, JSON.stringify(val));

  useEffect(() => {
    fetchGetSampleUsers(1)
      .then((data: GetUserResponse[]) => {
        const [userInfo] = data;
        setUser(userInfo);
        setLocalStorage("userId", userInfo.id);
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
