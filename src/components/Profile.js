import "../styles/Profile.css";

export const Profile = ({ profileImageSource, email }) => {
  return (
    <div className="Profile">
      <img
        className="Profile-image"
        src={profileImageSource}
        alt="프로필 이미지"
      />
      <span className="Profile-email">{email}</span>
    </div>
  );
};
