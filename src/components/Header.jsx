import logoImg from '../assets/logo.svg';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from '../services/api';
import style from '../styles/Header.module.css';
import useAsync from '../hooks/useAsync';

function Header() {
  const [userInfo, setUserInfo] = useState({});
  const [isPending, isError, asyncGetUser] = useAsync(getUser);

  const apiGetUser = useCallback(async () => {
    const result = await asyncGetUser();
    if (!result) return;

    const { name, email, profileImageSource } = result;
    setUserInfo({ name, email, profileImageSource });
  }, [asyncGetUser]);

  useEffect(() => {
    apiGetUser();
  }, [apiGetUser]);

  return (
    <nav id={style.header}>
      <div className={style.headerBox}>
        <div className={style.headerLogoBox}>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <div className={style.loginBox}>
          {Object.keys(userInfo).length ? (
            <div className={style.userInfoBox}>
              <img className={style.userImg} src={userInfo.profileImageSource} alt="user-img" />
              <div className={style.userEmail}>{userInfo.email}</div>
            </div>
          ) : (
            <a href="/signin">
              <div className={style.loginBtn}>로그인</div>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
