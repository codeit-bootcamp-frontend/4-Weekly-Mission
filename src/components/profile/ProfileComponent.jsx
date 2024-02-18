import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileComponent.css";

function ProfileComponent() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      {profileData ? (
        <div className="profile">
          <img
            className="profile--img"
            src={profileData.profileImageSource}
            alt="profile"
          />
          <p className="profile--email">{profileData.email}</p>
        </div>
      ) : (
        <p>프로필 정보를 가져오는 중입니다...</p>
      )}
    </>
  );
}

export default ProfileComponent;
