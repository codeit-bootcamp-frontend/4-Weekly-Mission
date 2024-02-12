import profileImg from "../../assets/profileImg.svg";
import "../../style/landing.css";

const PROFILE_IMAGE = profileImg;

export function ProfileBox() {
  return (
    <div className="profile-layout">
      <img className="" src={PROFILE_IMAGE} alt="profileImg" />
      <p>Codeit@codeit.com</p>
    </div>
  );
}

export default ProfileBox;
