import logo from "../images/logo.svg";
// import "./css/Header.css";
import style from "./TopNavBar.module.css";

function TopNavBar({ profileData }) {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <a href="">
          <img src={logo} />
        </a>
      </div>
      <div className={style.profileContainer}>
        {profileData.email ? (
          <>
            <img
              className={style.img}
              src={profileData.profileImageSource}
              alt="이미지"
            />
            <div className={style.email}>{profileData.email}</div>
          </>
        ) : (
          <div className={style.loginBtn}>로그인</div>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
