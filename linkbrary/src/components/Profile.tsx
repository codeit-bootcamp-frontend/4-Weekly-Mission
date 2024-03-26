import React from "react";
import "../styles/Profile.css";

interface ProfileProps {
  folder: string;
  user: string;
  proImg: string;
}

const Profile: React.FC<ProfileProps> = ({ folder, user, proImg }) => {
  return (
    <div className="profile">
      <img src={proImg} alt="프로필 사진" className="img-profile" />
      <p className="user-name">{user}</p>
      <h1 className="folder-name">{folder}</h1>
    </div>
  );
};

export default Profile;
