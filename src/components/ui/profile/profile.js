import "./Profile.css";

export const Profile = ({ userProfile }) => {
  return (
    <div className="Profile">
      <img
        className="Profile-image"
        src={userProfile.profileImageSource}
        alt="프로필 이미지"
      />
      <span className="Profile-email">{userProfile.email}</span>
    </div>
  );
};
