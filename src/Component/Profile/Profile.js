import "./Profile.css";

export const Profile = ({ profile }) => {
  const { email, profileImageSource } = profile;

  return (
    <div className="Profile">
      <img className="Profile-image" src={profileImageSource} alt="Profile-image" />
      <span className="Profile-email">{email}</span>
    </div>
  );
};
