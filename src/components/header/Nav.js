import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
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
          <img
            className={styles.header_logo}
            src={`${process.env.PUBLIC_URL}/assets/images/nav_logo.svg`}
          />
        </a>
        <div className={styles.profile_wrapper}>
          {userEmail == undefined ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/profile_image.svg`}
              />
              <p className={styles.profile_email}>{userEmail}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
