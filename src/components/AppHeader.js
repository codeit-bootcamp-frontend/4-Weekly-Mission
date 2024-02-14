import "./AppHeader.css";

function AppHeader({ folderInfo }) {
  const userName = folderInfo.folder?.name;
  const userOwner = folderInfo.folder?.owner.name;
  const userProfile = folderInfo.folder?.owner.profileImageSource;

  return (
    <div className="appHeader">
      <img src={userProfile}></img>
      <p>@{userOwner}</p>
      <h2>{userName}</h2>
    </div>
  );
}

export default AppHeader;
