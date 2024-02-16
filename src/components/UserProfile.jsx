import "./css/Header.css";

function UserProfile({ folderData }) {
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

export default UserProfile;
