import logo from "../images/logo.svg";
import "./css/Header.css";

function TopNavBar({ profileData }) {
  return (
    <div className="HeaderTop-container">
      <div className="logo-container">
        <a href="">
          <img src={logo} />
        </a>
      </div>
      <div className="profileData-container">
        {profileData.email ? (
          <>
            <img
              className="profile-img"
              src={profileData.profileImageSource}
              alt="이미지"
            />
            <div className="profile-email">{profileData.email}</div>
          </>
        ) : (
          <div className="profile-login-btn">로그인</div>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
