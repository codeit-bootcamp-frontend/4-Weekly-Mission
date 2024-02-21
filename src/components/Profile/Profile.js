import "./Profile.css";

const Profile = ({ profile }) => {
  const { email, image_source } = profile;

  return (
    <div className="Profile">
      <img className="Profile__image" src={image_source} alt="프로필 사진" />
      <span className="Profile__email">{email}</span>
    </div>
  );
};

export default Profile;
