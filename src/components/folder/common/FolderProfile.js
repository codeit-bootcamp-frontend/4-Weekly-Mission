import React, { useEffect, useState } from 'react';

const FolderProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('https://bootcamp-api.codeit.kr/api/users/1')
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data.data[0]);
      })
      .catch((error) => console.log('profileData 불러오기 실패', error));
  }, []);

  if (!profileData) {
    return <button>로그인</button>;
  }
  return (
    <div className="profile-items">
      <img
        className="profile-image"
        src={profileData.image_source}
        alt="Profile"
      />
      <p className="profile-email">{profileData.email}</p>
    </div>
  );
};

export default FolderProfile;
