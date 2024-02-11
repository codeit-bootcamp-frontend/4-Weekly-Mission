import { useEffect, useState } from 'react';
import { getSampleUserEmail } from '../api/api';
import '../styles/Nav.css';
import logo from '../images/logo.svg';
import profile from '../images/profile.svg';
import Button from './Button';

export default function Nav() {
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const sampleEmail = await getSampleUserEmail();
        setUserEmail(sampleEmail);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserId();
  }, []);

  return (
    <div className="nav">
      <div className="navFrame">
        <img src={logo} alt="로고이미지" />
        {userEmail ? (
          <div className="accountArea">
            <img src={profile} alt="프로필이미지" />
            <span>{userEmail}</span>
          </div>
        ) : (
          <Button content="로그인" />
        )}
      </div>
    </div>
  );
}
