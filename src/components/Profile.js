import React, { useEffect, useState } from 'react';
import fetchProfileData from '../utils/fetchProfileData';

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchProfileData(profileData, setProfileData);
  }, [profileData]);

  if (!profileData) {
    return <button>로그인</button>;
  }

  return (
    <div className="profile-items">
      <img
        className="profile-image"
        src={profileData.profileImageSource}
        alt="Profile"
      />
      <p className="profile-email">{profileData.email}</p>
    </div>
  );
}

export default Profile;
