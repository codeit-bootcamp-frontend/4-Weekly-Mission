import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "../styles/BaseLayout.module.css";
import { getRequestApi } from "../utils/requestApi";
import { useRequest } from "../hooks/useRequest";

const Header = () => {
  const [isSignin, setIsSignin] = useState({});

  const { data, request } = useRequest({
    url: "api/sample/user",
    method: "GET",
  });

  useEffect(() => {
    if (data) {
      setIsSignin(data);
    }
  }, [data]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      request();
    } else {
      setIsSignin(false);
    }
  }, []);

  return (
    <header className={styles.gnb}>
      <div className={styles.menu}>
        <a href="/">
          <img src="images/logo.svg" className={styles.logo} />
        </a>
        <div className={styles.between_blank}></div>
        {isSignin ? (
          <div className={styles.profile_info}>
            <img
              className={styles.profile_img}
              src={isSignin.profileImageSource}
            />
            <p className={styles.profile_id}>{isSignin.email}</p>
          </div>
        ) : (
          <a href="/signin" className={styles.signin + " " + styles.gradient}>
            로그인
          </a>
        )}
      </div>
    </header>
  );
};
const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer_body}>
        <div className={styles.footer_info}>
          <p className={styles.footer_author}>©codeit - 2023</p>
          <div className={styles.footer_link}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className={styles.footer_sns}>
            <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
              <img src="./images/facebook.svg" />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <img src="./images/twitter.svg" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src="./images/youtube.svg" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="./images/instagram.svg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
