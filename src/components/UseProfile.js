import { useEffect, useState } from 'react';
import { HREF } from '../utils/constants';
import './UseProfile.css';

function UseProfile() {
  const [profileData, setProfileData] = useState({
    folder: {
      owner: {
        profileImageSource: '',
        name: '',
      },
      name: '',
    },
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${HREF.BASE_URL}/api/sample/folder`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
      const jsonData = await response.json();
      setProfileData(jsonData);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const { profileImageSource, name } = profileData.folder.owner;
  const folderName = profileData.folder.name;

  return (
    <header className='header-shared'>
      <div className='profile-data'>
        {profileImageSource && (
          <img className='profile-img' src={profileImageSource} alt={name} />
        )}
        {name && <div className='profile-name'>{name}</div>}
      </div>
      {folderName && <div className='folder-name'>{folderName}</div>}
    </header>
  );
}

export default UseProfile;
