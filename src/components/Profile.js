import "./Profile.css";

const Profile = ({ profile, folderName }) => {
  const { name, profileImageSource } = profile;
  return (
    <div>
      <div className="profile">
        <div className="profile-image">
          <img src={profileImageSource} alt="프로필 이미지" />
        </div>
        <div className="profile-info">
          <h1>@{name || "No Name"}</h1>
          <h2>{folderName || "No Folder Name"}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
