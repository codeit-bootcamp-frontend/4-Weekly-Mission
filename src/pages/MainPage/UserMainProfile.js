import "./UserMainProfile.css";

export default function UserMainProfile({ folder = {} }) {
  console.log(folder.owner.name);
  return (
    <div className="main-profile-container">
      <img
        className="folder-profile-image"
        src={folder.owner.profileImageSource}
        alt="profile"
      ></img>
      <span className="profile-name">{folder.owner.name}</span>
      <span className="folder-name">{folder.name}</span>
    </div>
  );
}
