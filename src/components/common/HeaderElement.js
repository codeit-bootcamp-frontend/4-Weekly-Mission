import logo from "../../assets/Linkbrary.png";
import profile from "../../assets/icons/icon_myprofile.png";
import "../../style/common.css";

function HeaderElement() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="myProfile" status="user">
        <div id="myProfileName">
          <div id="myProfile-back_img">
            <img src={profile} id="myProfile-img" alt="myProfile-img"></img>
          </div>
          <span id="myEmail"></span>
        </div>
        <a href="/signup.html">
          <button id="LoginBtn" type="button">
            로그인
          </button>
        </a>
      </div>
    </header>
  );
}

export default HeaderElement;
