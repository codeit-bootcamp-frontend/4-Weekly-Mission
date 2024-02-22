import styles from "./Nav.module.css";
import NavLoginButton from "./NavLoginButoon";
import { useFetch } from "../../hooks/useFetch";

function SharedNav({ userDataUrl }) {
  const { data: userData } = useFetch(userDataUrl);

  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-inside-wrapper"]}>
        <a href="/">
          <img
            className={styles["header-logo"]}
            src={`${process.env.PUBLIC_URL}/assets/images/nav_logo.svg`}
            alt="Linkbrary_logo"
          />
        </a>
        <div className={styles["profile-wrapper"]}>
          {!userData?.email ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={userData?.profileImageSource}
                alt="user_profile_image"
                className={styles["nav-profile-image"]}
              />
              <p className={styles["profile-email"]}>{userData.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SharedNav;
