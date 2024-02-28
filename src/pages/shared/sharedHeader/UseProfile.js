import { useEffect, useState } from 'react';
import { LINK_URL } from '../../../utils/constants';
import './UseProfile.css';

const UseProfile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthUseProfile = async () => {
      try {
        const response = await fetch(`${LINK_URL.BASE_API_URL}/api/users/1`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setProfileData(jsonData.data[0]);
      } catch (error) {
        console.error('Error data:', error);
      } finally {
        setLoading(false);
      }
    };
    fecthUseProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { name, image_source, email } = profileData;

  return (
    <header className='header-shared'>
      <div className='profile-data'>
        {image_source && (
          <img className='profile-img' src={image_source} alt={name} />
        )}
        {email && <div className='profile-name'>{email}</div>}
      </div>
      {name && <div className='folder-name'>{name}</div>}
    </header>
  );
};

export default UseProfile;
