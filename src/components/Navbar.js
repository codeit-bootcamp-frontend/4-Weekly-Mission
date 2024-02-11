import LinkbraryLogo from '../images/logo.svg';
import '../css/Navbar.css';
import { useEffect, useState } from "react";
import { getUserInfo } from "../api";

function NavigationBar() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [profileData, setProfileData] = useState({});

  const getProfileData = async (path) => {
    const result = await getUserInfo(path);
    
    if (!result) return;

    setProfileData(result);
    setLoginStatus(true);
  }

  useEffect(() => {
    getProfileData('user');
  }, [])

  return (
    <nav className='nav'>
      <img src={LinkbraryLogo} alt='logo'/>
      {loginStatus ? (
        <div className='account'>
          <img src={profileData.profileImageSource} alt='profile' />
          <p>{profileData.email}</p>
        </div>
      )
      :(
        <a href='../signin.html' className='loginBtn'>로그인</a>
      )
      }
    </nav>
  )
}

export default NavigationBar;

// 리스폰스 응답
// {
//   "id": 1,
//   "name": "코드잇",
//   "email": "codeit@codeit.com",
//   "profileImageSource": "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png"
// }