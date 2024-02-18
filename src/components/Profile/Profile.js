import "./Profile.css";

export const Profile = ({ userData }) => {
  const { email, image_source } = userData?.data[0] || {};
  return (
    <div className="Profile">
      <img className="Profile-image" src={image_source} alt="프로필 이미지" />
      <span className="Profile-email">{email}</span>
    </div>
  );
};
