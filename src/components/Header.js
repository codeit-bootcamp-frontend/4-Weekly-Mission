import logo from "../images/logo.svg";

function Header({ profileData, folderProfileData }) {
  return (
    <div>
      <div>
        <img src={logo}></img>
      </div>
      <div>
        <img src={profileData.profileImageSource} alt="이미지" />
        <div>{profileData.email}</div>
      </div>
      <div>
        <img src={folderProfileData.profileImageSource} alt="이미지" />
        <div>{folderProfileData.name}</div>
      </div>
    </div>
  );
}

export default Header;
