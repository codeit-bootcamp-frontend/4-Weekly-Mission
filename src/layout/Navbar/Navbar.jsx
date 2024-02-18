import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { logoImage } from "assets";
import { fetchUserData } from "services/api";
import Profile from "./Profile/Profile";
import { UserContext } from "context/UserProvider";

function Navbar() {
  const { id } = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData(id)
      .then((data) => {
        setUser(...data);
        console.log(...data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrap}>
        <NavLink to="/">
          <img src={logoImage} className={styles.logo} />
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
