import "./Gnb.css";
import logoImg from "../assets/svg/logo.svg";
import profileImg from "../assets/png/profile.png";

function Gnb({ userData }) {
  return (
    <div className="gnb">
      <div className="gnb_inner">
        <img src={logoImg} alt="logo" />
        {userData.email ? (
          <div className="gnb_profile">
            <img src={profileImg} alt="" />
            <p>{userData.email}</p>
          </div>
        ) : (
          <a href="./" className="gnb_login">
            로그인
          </a>
        )}
      </div>
    </div>
  );
}

export default Gnb;
