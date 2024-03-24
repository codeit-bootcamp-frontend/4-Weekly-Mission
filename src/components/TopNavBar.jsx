import logo from "../images/logo.svg";
import styles from "./TopNavBar.module.css";

function TopNavBar({ profileData, isSticky }) {
  const containerClassName = isSticky
    ? `${styles.container} ${styles.sticky}`
    : styles.container;

  return (
    <div className={containerClassName}>
      <div className={styles.logoContainer}>
        <a href="">
          <img src={logo} />
        </a>
      </div>
      <div className={styles.profileContainer}>
        {profileData.email ? (
          <>
            <img
              className={styles.img}
              src={profileData.profileImageSource}
              alt="이미지"
            />
            <div className={styles.email}>{profileData.email}</div>
          </>
        ) : (
          <div className={styles.loginBtn}>로그인</div>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
