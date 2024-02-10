import { useEffect, useState } from 'react';
import '../style/IsLoggedInUser.css';

function IsLoggedInUser() {
  const [profileData, setProfileData] = useState({ folder: { owner: {} } });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/folder'
      );
      const jsonData = await response.json();
      setProfileData(jsonData);
    } catch (error) {
      console.error('Error data', error);
    }
  };

  const profileImg = profileData.folder.owner.profileImageSource;
  const profileName = profileData.folder.owner.name;
  const folderNmae = profileData.folder.name;

  return (
    <>
      <div className='profile'>
        <div className='profile-data'>
          <img className='profile-img' src={profileImg} alt={profileName} />
          <div className='profile-name'>{profileName}</div>
        </div>
        <div className='folder-name'>{folderNmae}</div>
      </div>
    </>
  );
}

export default IsLoggedInUser;
