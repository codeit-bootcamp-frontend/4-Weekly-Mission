import React from "react";
import style from "./gnb.module.scss";
import logo from "../../assets/logo.svg";
import profileImg from "../../assets/profileImg.svg";
import ButtonCta from "../Cta/buttonCta";
import Image from "next/image";
interface Props {
  login: boolean;
}

const GnbContent = ({login}: Props) => {
  return login ? (
    <div className={style.loginRegistered}>
      <img src={profileImg} alt="profileImg" />
      <p>Codeit@codeit.com</p>
    </div>
  ) : (
    <ButtonCta src="http://codeit.kr" className={style.cta}>
      로그인
    </ButtonCta>
  );
};

function Gnb({login}: Props) {
  return (
    <nav className={`${style.gnb} ${login ? style.login : style.logout}`}>
      <div className={style.frame}>
        <Image src={logo} className={style.logo} alt="logo" />
        <GnbContent login={login} />
      </div>
    </nav>
  );
}

export default Gnb;
