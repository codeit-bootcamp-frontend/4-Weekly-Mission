import React, { useEffect, useState } from 'react';

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/user'
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('에러 발생:', error);
        alert(error);
      }
    };
    fetchProfileInfo();
  }, []);

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
