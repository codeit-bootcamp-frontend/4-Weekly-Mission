import logoImg from '../assets/logo.svg';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from '../services/api';
import style from '../styles/Header.module.css';
import useAsync from '../hooks/useAsync';
import { useLocation } from 'react-router-dom';

function Header() {
  const [userInfo, setUserInfo] = useState({});
  const [isPending, isError, asyncGetUser] = useAsync(getUser);
  const { pathname } = useLocation();

  const apiGetUser = useCallback(async () => {
    const { data } = await asyncGetUser();
    if (!data) return;
    const { name, email, image_source } = data[0];
    setUserInfo({ name, email, image_source });
  }, [asyncGetUser]);

  useEffect(() => {
    apiGetUser();
  }, [apiGetUser]);

  const positionStatic = {
    position: 'static',
  };

  return (
    <nav id={style.header} style={pathname === '/folder' ? positionStatic : {}}>
      <div className={style.headerBox}>
        <div className={style.headerLogoBox}>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <div className={style.loginBox}>
          {Object.keys(userInfo).length ? (
            <div className={style.userInfoBox}>
              <img className={style.userImg} src={userInfo?.image_source} alt="user-img" />
              <div className={style.userEmail}>{userInfo?.email}</div>
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
