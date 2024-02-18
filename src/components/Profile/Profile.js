import "./Profile.css";

export const Profile = ({ userData }) => {
  return (
    <div className="Profile">
      <img
        className="Profile-image"
        src={userData.profileImageSource}
        alt="프로필 이미지"
      />
      <span className="Profile-email">{userData.email}</span>
    </div>
  );
};
