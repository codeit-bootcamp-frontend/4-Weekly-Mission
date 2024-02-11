import "./UserMainProfile.css";

export default function UserMainProfile({ user, folder }) {
  return (
    <div className="main-profile-container">
      <img src="images/Avatar.svg" alt="profile"></img>
      <span className="profile-id">{user.name}</span>
      <span className="folder-name">{folder.name}</span>
    </div>
  );
}
