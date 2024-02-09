import logo from "../images/logo.svg";

function Header({ profileData, folderData }) {
  const owner = folderData.owner;
  return (
    <div>
      <div>
        <img src={logo}></img>
      </div>
      <div>
        <img src={profileData.profileImageSource} alt="" />
        <div>{profileData.email}</div>
      </div>
      <div>
        <img src={owner.profileImageSource} />
        <div>{owner.name}</div>
        <div>{folderData.name}</div>
      </div>
    </div>
  );
}

export default Header;
