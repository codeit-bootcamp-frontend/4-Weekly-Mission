import logoImg from "../assets/logo.svg";
import profileImg from "../assets/profile.png";

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
