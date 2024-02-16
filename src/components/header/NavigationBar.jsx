import "./NavigationBar.css";
import logoImg from "../../assets/linkbrary-logo.png";

function NavigationBar({ userInfo }) {
  return (
    <div className="NavigationBar">
      <div className="container">
        <a href="#">
          <img src={logoImg} alt="logo" />
        </a>
        {userInfo ? (
          <div className="user_information">
            <img
              src={userInfo.profileImageSource}
              alt="user image"
              className="user_image"
            />
            <span className="user_email">{userInfo.email}</span>
          </div>
        ) : (
          <button href="#" className="login_button">
            로그인
          </button>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
