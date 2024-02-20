import logoImg from "../assets/svg/logo.svg";
import profileImg from "../assets/png/profile.png";

function Gnb(props) {
  let hasUserData = props.hasUserData;

  return (
    <div className="gnb">
      <div className="gnb_inner">
        <img src={logoImg} alt="logo" />
        {hasUserData && (
          <div className="gnb_profile">
            <img src={profileImg} alt="" />
            <p>{props.email}</p>
          </div>
        )}
        {!hasUserData && (
          <a href="./" className="gnb_login">
            로그인
          </a>
        )}
      </div>
    </div>
  );
}

export default Gnb;
