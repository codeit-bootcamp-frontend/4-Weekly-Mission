import "./UserMainProfile.css";

export default function UserMainProfile({ folder = {} }) {
  if (!folder.owner) {
    return null;
  }

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
