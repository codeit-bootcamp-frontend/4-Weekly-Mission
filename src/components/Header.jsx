import logo from "../images/logo.svg";
import "./css/Header.css";

function HeaderTop({ profileData }) {
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

function HeaderBottom({ folderData }) {
  const owner = folderData && folderData.owner;
  const profileImageSource = owner && owner.profileImageSource;
  const profileName = owner && owner.name;
  return (
    <div className="HeaderBottom-container">
      {profileImageSource && (
        <img className="HeaderBottom-img" src={profileImageSource} alt="" />
      )}
      {profileName && <div className="HeaderBottom-name">{profileName}</div>}
      <div className="HeaderBottom-folder-name">{folderData.name}</div>
    </div>
  );
}

function Header({ profileData, folderData }) {
  return (
    <header>
      <HeaderTop profileData={profileData} />
      <HeaderBottom folderData={folderData} />
    </header>
  );
}

export default Header;
