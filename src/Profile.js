import "./Profile.css";

const Profile = function ({ profile }) {
  return (
    <div className="Profile">
      <img
        className="Profile-img"
        src={profile.profileImageSource}
        alt="프로필"
      />
      <span className="Profile-email">{profile.email}</span>
    </div>
  );
};

export default Profile;
