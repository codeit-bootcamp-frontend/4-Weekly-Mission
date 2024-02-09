import userImg from "../images/social_icon/facebook.png";
import "../css/header/userProfile.css";

function UserProfile(){

  return (
    <div className="user-profile">
      <img className="user-profile-img" src={userImg} alt="사용자 프로필 사진" />
      <p calssName="user-email">Codeit@codeit.com</p>
    </div>
  );
};

export default UserProfile;