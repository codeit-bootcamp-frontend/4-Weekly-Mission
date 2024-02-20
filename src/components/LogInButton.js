import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HREF } from '../utils/constants';
import Button from './ui/Button';
import './LogInButton.css';

const LogInButton = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${HREF.BASE_URL}/api/users/1`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const jsonData = await response.json();
        const getUserData = jsonData.data[0];
        setUserData(getUserData);
      } catch (error) {
        console.error('Error data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='log-in-button'>
      {userData ? (
        <div className='user'>
          <img
            src={userData.image_source}
            alt={userData.name}
            className='user-img'
          />
          <div className='user-email none'>{userData.email}</div>
        </div>
      ) : (
        <Link to='/signin'>
          <Button name='gnb'>로그인</Button>
        </Link>
      )}
    </div>
  );
};

export default LogInButton;
