import { Children } from "react";
import style from "../../styles/CommonHeader.module.css";

// SharedHeader에서는 Profile을 받아오고, FolderHeader에서는 LinkAdd를 받아옴
function CommonHeader() {
  return (
    <div className={style.CommonHeader}>
      <div className={style.NavigationBar}></div>
      {Children}
    </div>
  );
}

export default CommonHeader;
