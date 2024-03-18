import React from "react";
import classNames from "classnames/bind";
import style from "./gnb.module.scss";
import logo from "../../assets/logo.svg";
import profileImg from "../../assets/profileImg.svg";
import Cta from "../Cta/Cta";

const cx = classNames.bind(style);

const GnbContent = ({login}) => {
  return login ? (
    <div className={cx(`login-registered`)}>
      <img src={profileImg} alt="profileImg" />
      <p>Codeit@codeit.com</p>
    </div>
  ) : (
    <Cta className={cx(`cta`)}>로그인</Cta>
  );
};

function Gnb({login}) {
  const gnbLogin = login ? cx(`gnb`, `login`) : cx(`gnb`, `logout`);
  return (
    <nav className={gnbLogin}>
      <div className={cx(`frame`)}>
        <img src={logo} className={cx(`logo`)} alt="logo" />
        <GnbContent login={login} />
      </div>
    </nav>
  );
}

export default Gnb;
