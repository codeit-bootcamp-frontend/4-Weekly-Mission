import style from "../styles/SharedHeader.module.css";
import Profile from "./Profile";

function SharedHeader() {
  return (
    <div className={style.SharedHeader}>
      <div className={style.NavigationBar}></div>
      <Profile></Profile>
    </div>
  );
}

export default SharedHeader;
