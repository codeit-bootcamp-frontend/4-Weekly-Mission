import "./Profile.css";

export const Profile = ({ userEmail, userImgSource }) => {
  return (
    <div className="Profile">
      <img className="Profile-image" src={userImgSource} alt="프로필 이미지" />
      <span className="Profile-email">{userEmail}</span>
    </div>
  );
};
