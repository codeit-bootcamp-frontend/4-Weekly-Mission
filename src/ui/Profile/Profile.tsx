import "./Profile.css";

interface Prop {
  profile: {
    profileImageSource: string;
    email: string;
  };
}

const Profile = ({ profile }: Prop) => {
  return (
    <div className="Profile">
      <img
        className="Profile-image"
        src={profile.profileImageSource}
        alt="프로필 이미지"
      />
      <span className="Profile-email">{profile.email}</span>
    </div>
  );
};

export default Profile;
