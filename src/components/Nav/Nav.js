import GetUserInfo from "api/GetUserInfo";
import useAsync from "hook/useAsync";
import logo from "../../assets/header-logo.svg";
import styles from "./Nav.module.css";

const { useEffect, useState } = require("react");

const Nav = () => {
  const [user, setUser] = useState({});
  const [loading, error, asyncedGetUser] = useAsync(GetUserInfo);

  const loadUserInfo = async () => {
    const userData = await asyncedGetUser();
    setUser(userData);
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <>
      <div className={styles["nav"]}>
        <div className={styles["navContainer"]}>
          <div className={styles["navLogo"]}>
            <a href="/">
              <img src={logo} alt="nav로고" />
            </a>
          </div>
          {user ? (
            <>
              <div className={styles["userProfile"]}>
                <img
                  className={styles["userImg"]}
                  src={user.profileImageSource}
                  alt="로그인시 유저프로필이미지"
                />
                <span className={styles["userEmail"]}>{user.email}</span>
              </div>
            </>
          ) : (
            <a href="/signin" className={styles["loginBtn"]}>
              로그인
            </a>
          )}
        </div>
      </div>
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Nav;
