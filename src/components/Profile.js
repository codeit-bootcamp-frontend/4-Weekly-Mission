import React, { useEffect, useState } from "react";
import { responseUserData } from "../apis/dataFetch";

const Profile = () => {
  const [profileData, setProfileData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    responseUserData(setProfileData, setIsLoading);
  }, []);

  if (isLoading) return false;

  return profileData ? (
    <div className="profile-items">
      <img
        className="profile-image"
        src={profileData.profileImageSource}
        alt="Profile"
      />
      <p className="profile-email">{profileData.email}</p>
    </div>
  ) : (
    <button>Login</button>
  );
};

export default Profile;
