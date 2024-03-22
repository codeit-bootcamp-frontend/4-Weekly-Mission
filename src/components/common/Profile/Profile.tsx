import React from "react";
import "./Profile.css";

interface ProfileProps {
  profile: {
    profileImageSource: string;
    email: string;
  };
}

export const Profile = ({ profile }: ProfileProps) => {
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
