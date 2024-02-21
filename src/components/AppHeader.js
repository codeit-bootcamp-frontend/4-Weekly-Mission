import "./AppHeader.css";

function AppHeader({ folderInfo }) {
  const userName = folderInfo.folder?.name;
  const userOwner = folderInfo.folder?.owner.name;
  const userProfile = folderInfo.folder?.owner.profileImageSource;

  // function AppHeader({ name, owner }) {
  //   const { name: ownerName, profileImageSource } = owner;

  return (
    <div className="container">
      <div className="appHeader">
        <img src={userProfile}></img>
        <p>@{userOwner}</p>
        <h2>{userName}</h2>
      </div>
    </div>
  );
  // return (
  //   <div className="appHeader">
  //     <img src={profileImageSource}></img>
  //     <p>@{ownerName}</p>
  //     <h2>{name}</h2>
  //   </div>
  // );
}

export default AppHeader;
