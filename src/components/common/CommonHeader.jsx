import { Children } from "react";
import style from "../../styles/CommonHeader.module.css";

function CommonHeader() {
  return (
    <div className={style.SharedHeader}>
      <div className={style.NavigationBar}></div>
      {Children}
    </div>
  );
}

export default CommonHeader;
