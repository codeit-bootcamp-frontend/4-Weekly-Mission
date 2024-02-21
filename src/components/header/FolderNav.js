import styles from "./Nav.module.css";
import NavLoginButton from "./NavLoginButoon";
import { useFetch } from "../../hooks/useFetch";

function FolderNav({ userDataUrl }) {
  const { data: userDataObject } = useFetch(userDataUrl);
  const userData = userDataObject?.data["0"];

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
                src={userData?.image_source}
                alt="user_profile_image"
                className={styles.nav_profile_image}
              />
              <p className={styles.profile_email}>{userData.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderNav;
