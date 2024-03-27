import logo from "../images/logo.svg";
import styles from "./TopNavBar.module.css";
//types
import { ProfileData } from "../types/commonTypes";

interface Props {
  profileData: ProfileData | {};
  isSticky: boolean;
}

function TopNavBar({ profileData, isSticky }: Props) {
  const containerClassName = isSticky
    ? `${styles.container} ${styles.sticky}`
    : styles.container;

  return (
    <div className={containerClassName}>
      <div className={styles.logoContainer}>
        <a href="/shared">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.profileContainer}>
        {(profileData as ProfileData).email ? (
          <>
            <img
              className={styles.img}
              src={(profileData as ProfileData).profileImageSource}
              alt="이미지"
            />
            <div className={styles.email}>
              {(profileData as ProfileData).email}
            </div>
          </>
        ) : (
          <div className={styles.loginBtn}>로그인</div>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
