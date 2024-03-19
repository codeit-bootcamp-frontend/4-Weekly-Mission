import { Link } from "react-router-dom";
import Logo from "../../../assets/svg/Logo";
import styles from "./Header.module.scss";
import useGet from "../../../hooks/useGet";
import { useEffect, useState } from "react";

export default function Header() {
  const url = `https://bootcamp-api.codeit.kr/api/users/1`;
  const [fetchData, setFetchData] = useState({
    email: null,
    image_source: null,
  });
  const { data, isLoading } = useGet(url);

  useEffect(() => {
    if (!isLoading) {
      setFetchData(data.data[0]);
    }
  }, [data, isLoading]);

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderBox}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        {isLoading ? (
          <button className={styles.loginBtn}>로그인</button>
        ) : (
          <section className={styles.profileBox}>
            <img
              className={styles.profileBox__img}
              src={fetchData.image_source}
              alt="user profile"
            />
            <p className={styles.profileBox__email}>{fetchData.email}</p>
          </section>
        )}
      </div>
    </header>
  );
}
