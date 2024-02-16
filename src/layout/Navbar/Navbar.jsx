import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { logoImage } from "assets";
import { fetchUserData } from "services/api";
import Profile from "./Profile/Profile";
import Button from "components/Button/Button";
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
        <NavLink to="#">
          {user ? (
            <Profile email={user.email} imgUrl={user.image_source} />
          ) : (
            <Button color={"cta"}>로그인</Button>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
