import "./Gnb.css";
import logo from "../assets/images/logo.svg";
import profileImg from "../assets/images/profile-img.png";

//글로벌 네비게이션 바
function Gnb() {
  return (
    <nav className="gnb position-fixed margin-auto z-top">
      <div className="gnb-container flex-row">
        <img className="gnb-logo" src={logo} alt="logo"></img>
        <div className="gnb-profile flex-row">
          <img className="profile-img" src={profileImg} alt="profile-img"></img>
          <p className="profile-email text-color-gray100 hidden">Codeit@codeit.com</p>
        </div>
      </div>
    </nav>
  );
}

export default Gnb;
