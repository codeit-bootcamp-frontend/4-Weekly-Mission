import styles from "./Header.module.css";
import logo from "../../assets/header-logo.svg";
import { useEffect, useState } from "react";
import { getUser } from "api/api";
import { useAsync } from "hooks/useAsync";

export default function Header() {
  const [user, setUser] = useState({});
  const [loading, error, getUserAsync] = useAsync(getUser);

  const loadUser = async () => {
    // try {
    //   const data = await getUser();
    //   setUser(data);
    // } catch (error) {
    //   console.log(error);
    // }

    const data = await getUserAsync();
    setUser(data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headings}>
        <h1 className={styles["header-logo"]}>
          <a href="/">
            <img src={logo} alt="header_logo" />
          </a>
        </h1>
        {user ? (
          <>
            <div className={styles["headerProfile"]}>
              <img
                className={styles.profileImg}
                src={user.profileImageSource}
                alt="profileImg"
              />
              <p className={styles.profileEmail} style={{ fontSize: "1.2rem" }}>
                {user.email}
              </p>
            </div>
          </>
        ) : (
          <a href="/signin" className="btn">
            로그인
          </a>
        )}
      </div>
      {error && <div>{error.message}</div>}
    </header>
  );
}
