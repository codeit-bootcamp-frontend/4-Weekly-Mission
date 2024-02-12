import { useEffect, useState } from "react";
import styles from "../../css/Nav.module.css";
import header_logo from "../../image/header_logo.svg";
import profile_image from "../../image/profile_image.svg";
import NavLoginButton from "./NavLoginButoon";

function Nav() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function fetchUserProfileData() {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/user"
      );

      const userProfiledata = await response.json();
      setUserEmail(userProfiledata.email);
    }
    fetchUserProfileData();
  }, []);
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav_inside_wrapper}>
        <a href="/">
          <img className={styles.header_logo} src={header_logo} />
        </a>
        <div className={styles.profile_wrapper}>
          {userEmail == undefined ? (
            <NavLoginButton />
          ) : (
            <>
              <img src={profile_image} />
              <p className={styles.profile_email}>{userEmail}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
