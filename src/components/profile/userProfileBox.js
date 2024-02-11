import { useFolder } from "../../hooks/useFolder";
import { useProfile } from "../../hooks/useProfile";
import "./profile.css";

export const UserProfileBox = ({ email, imageSrc }) => {
  return (
    <div className="profile">
      <img src={imageSrc} alt={imageSrc} className="profileImage" />
      <p className="profileEmail">{email}</p>
    </div>
  );
};
