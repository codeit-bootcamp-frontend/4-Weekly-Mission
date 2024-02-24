import React, { useState, useEffect } from "react";

function FolderProfile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!profileData) {
    return <button>로그인</button>;
  }

  return (
    <div className="profile-info">
      <img className="profile-img" src={profileData.image_source} alt="profile_img" />
      <p className="profile-email">{profileData.email}</p>
    </div>
  );
}

export default FolderProfile;
