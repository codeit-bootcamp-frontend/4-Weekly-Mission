import { Link } from "react-router-dom";
import Logo from "@/assets/svg/Logo";
import styles from "./Header.module.scss";
import useGet from "../../../hooks/useGet";
import { useEffect, useState } from "react";
import { END_POINT } from "../../../constants";
import { UserDataProps } from "@/constants/index.types";

interface HeaderProps {
  headerPosition: React.CSSProperties;
}

export default function Header({ headerPosition }: HeaderProps) {
  const [fetchData, setFetchData] = useState<UserDataProps>();
  const { data, isLoading } = useGet<UserDataProps[]>(END_POINT.user);

  useEffect(() => {
    if (data && !isLoading) {
      // 이쁘게 고치고 싶읍니다. ㅠㅠ
      // fetch data가 배열로 들어와요
      // 로그인 기능 구현되면 수정 가능할 듯 싶습니다.

      setFetchData(data[0]);
    }
  }, [data, isLoading]);

  return (
    <header className={styles.Header} style={headerPosition}>
      <div className={styles.HeaderBox}>
        <Link to="/">
          <Logo />
        </Link>
        {isLoading ? (
          <button className={styles.loginBtn}>로그인</button>
        ) : (
          <section className={styles.profileBox}>
            <img
              className={styles.profileBox__img}
              src={fetchData?.image_source}
              alt="user profile"
            />
            <p className={styles.profileBox__email}>{fetchData?.email}</p>
          </section>
        )}
      </div>
    </header>
  );
}
