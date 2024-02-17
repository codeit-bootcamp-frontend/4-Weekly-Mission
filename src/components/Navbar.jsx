import { useEffect, useState } from "react";
import { getUserInfo } from "../api/api";
import LinkbraryLogo from '../images/logo.svg';
import styles from '../css/Navbar.module.css';

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
    <nav className={styles.nav}>
      <img src={LinkbraryLogo} alt='logo'/>
      {loginStatus ? (
        <div className={styles.account}>
          <img src={profileData.profileImageSource} alt='profile' />
          <p>{profileData.email}</p>
        </div>
      )
      :(
        <a href='../signin.html' className={styles.loginBtn}>로그인</a>
      )
      }
    </nav>
  )
}

export default NavigationBar;
