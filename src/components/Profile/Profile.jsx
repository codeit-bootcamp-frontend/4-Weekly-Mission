import "./Profile.css";

const Profile = ({ profile }) => {
  return (
    <div className="Profile">
      <img className="ProfileImage" src={profile.profileImageSource} alt="프로필 이미지" />
      <span className="ProfileEmail">{profile.email}</span>
    </div>
  );
};

export default Profile;
