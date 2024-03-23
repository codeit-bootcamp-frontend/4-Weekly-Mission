import "./Profile.css";

interface UserProfileInfo {
  userEmail: string;
  userImgSource: string;
}

export const Profile = ({ userEmail, userImgSource }: UserProfileInfo) => {
  return (
    <div className="Profile">
      <img className="Profile-image" src={userImgSource} alt="프로필 이미지" />
      <span className="Profile-email">{userEmail}</span>
    </div>
  );
};
