import { useEffect, useState } from 'react';
import { getSampleUserData } from '../api/api';
import '../styles/Nav.css';
import logo from '../images/logo.svg';
import Button from './Button';

export default function Nav() {
  const [loginUserData, setLoginUserData] = useState(null);
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const sampleData = await getSampleUserData();
        setLoginUserData(sampleData);
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
        {loginUserData ? (
          <div className="accountArea">
            <img src={loginUserData.profileImageSource} alt="프로필이미지" />
            <span>{loginUserData.email}</span>
          </div>
        ) : (
          <Button content="로그인" />
        )}
      </div>
    </div>
  );
}
