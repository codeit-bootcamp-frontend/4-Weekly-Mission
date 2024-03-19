import styles from "./styles.module.css";
import logo from "../../assets/header-logo.svg";
import { useEffect, useState } from "react";
import { useAsync } from "../../hooks/useAsync";
import { getSampleUser } from "../../api/api";

interface User {
  profileImageSource: string;
  email: string;
}

export function Header() {
  //지렸다
  const [user, setUser] = useState<User>({} as User);
  //질문 - 타입이 이상하게 잡혔었음.
  const [_, error, getUserAsync] = useAsync(getSampleUser);

  const loadUser = async () => {
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
      {error?.message && <div>{error.message}</div>}
    </header>
  );
}
