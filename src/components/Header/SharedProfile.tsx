import { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import { ProfileData } from './FolderProfile';

function SharedProfile({ userData }: { userData: ProfileData }) {
  const [user, setUser] = useState<ProfileData | null>(null);
  const sharedFetchData = async () => {
    try {
      const response = await axiosInstance.get('sample/user');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };
  useEffect(() => {
    sharedFetchData();
  }, []);
  return (
    <>
      {user === null ? (
        <div className="headerButton">
          <button>로그인</button>
        </div>
      ) : (
        <div className="profileArea">
          <img className="profileImage" src={user.profileImageSource} alt="프로필 이미지" />
          <p className="profileEmail">{user.email}</p>
        </div>
      )}
    </>
  );
}

export default SharedProfile;
