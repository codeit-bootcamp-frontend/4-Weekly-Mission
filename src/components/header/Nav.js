import styles from "./Nav.module.css";
import NavLoginButton from "./NavLoginButoon";
import { useFetch } from "../../hooks/useFetch";

function Nav({ userDataUrl }) {
  const { data: userData } = useFetch(userDataUrl);

  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav_inside_wrapper}>
        <a href="/">
          <img
            className={styles.header_logo}
            src={`${process.env.PUBLIC_URL}/assets/images/nav_logo.svg`}
            alt="Linkbrary_logo"
          />
        </a>
        <div className={styles.profile_wrapper}>
          {!userData?.email ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/profile_image.svg`}
                alt="user_profile_image"
              />
              <p className={styles.profile_email}>{userData.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
