import React from "react";
import style from "./header.module.css";
import { linkIcon } from "assets";
function Header() {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <img src={linkIcon} className={style.icon} />
        <input
          className={style.input}
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className={style.button}>추가하기</button>
      </form>
    </div>
  );
}

export default Header;
