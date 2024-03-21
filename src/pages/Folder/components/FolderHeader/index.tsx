import styles from "./styles.module.css";
import logo from "../../../../assets/header-logo.svg";
import { useEffect, useState } from "react";
import { getUser } from "../../../../api/api";
import { useAsync } from "../../../../hooks/useAsync";
import { User } from "../../../../types";

export function FolderHeader() {
  const [user, setUser] = useState<User>({} as User);
  const [loading, error, getUserAsync] = useAsync(getUser);

  const loadUser = async (option: { userId: number }) => {
    const data = await getUserAsync(option);
    if (!data) return;
    setUser(data.data[0]);
  };

  useEffect(() => {
    loadUser({ userId: 1 });
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    <header className={styles.header}>
      {error && <div>네트워크 오류입니다. 인터넷 연결상태를 확인해주세요</div>}
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
    </header>
  );
}
