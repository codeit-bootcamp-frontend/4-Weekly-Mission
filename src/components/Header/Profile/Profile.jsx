import React, { useEffect, useState } from 'react';
import styles from './Profile.module.scss';

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/users/1'
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const data = await response.json();
        setProfileData(data.data[0]);
      } catch (error) {
        console.error('에러 발생:', error);
        alert(error);
      }
    };
    fetchProfileInfo();
  }, []);

  if (!profileData) {
    return <button className={styles.loginBtn}>로그인</button>;
  }

  return (
    <div className={styles.profileItems}>
      <img
        className={styles.profileImage}
        src={profileData.image_source}
        alt="Profile"
      />
      <p className={styles.profileEmail}>{profileData.email}</p>
    </div>
  );
}

export default Profile;
