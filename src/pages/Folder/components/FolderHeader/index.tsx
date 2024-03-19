import styles from "./styles.module.css";
import logo from "../../../../assets/header-logo.svg";
import { useEffect, useState } from "react";
import { getUser } from "../../../../api/api";
import { useAsync } from "../../../../hooks/useAsync";
import { User } from "../../../../types";

export function FolderHeader() {
  const [user, setUser] = useState<User>({} as User);
  const [_, error, getUserAsync] = useAsync(getUser);

  const loadUser = async (option: { userId: number }) => {
    try {
      const { data } = await getUserAsync(option);
      setUser(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUser({ userId: 1 });
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
                src={user.image_source}
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
