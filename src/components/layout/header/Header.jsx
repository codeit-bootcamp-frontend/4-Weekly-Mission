import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import linkbraryLogo from "../../../assets/linkbrary-logo.svg";

function Header({ user }) {
  const { pathname } = useLocation();
  // eslint-disable-next-line dot-notation
  const profileImageUrl = user
    ? user.profileImageSource || user["image_source"]
    : "";
  const headerPosition = pathname === "/folder" ? styles.static : "";

  return (
    <header className={`${styles.headerArea} ${headerPosition}`}>
      <div className={styles.headerGroup}>
        <a href="/" className={styles.logoArea}>
          <img src={linkbraryLogo} alt="로고" className={styles.logoImg} />
        </a>
        <button className={styles.btnGroup}>
          {user ? (
            <>
              <img
                src={profileImageUrl}
                alt="프로필 사진"
                className={styles.userProfile}
              />
              <span className={styles.userEmail}>{user.email}</span>
            </>
          ) : (
            <a className={styles.btn} href="/signin.html">
              로그인
            </a>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
