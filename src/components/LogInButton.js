import { useEffect, useState } from 'react';
import '../style/LogInButton.css';

function LogInButton() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/user'
        );
        const jsonData = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.error('Erro data:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {userData !== null ? (
        <div className='user'>
          <img
            src={userData.profileImageSource}
            alt={userData.name}
            className='user-img'
          />
          <div className='user-email none'>{userData.email}</div>
        </div>
      ) : (
        <a href='signin.html' className='log-in'>
          로그인
        </a>
      )}
    </>
  );
}

export default LogInButton;
