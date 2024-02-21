import { useEffect, useState } from "react";
import { getUserInfo } from "../api/api";
import LinkbraryLogo from '../images/logo.svg';
import styles from '../css/Navbar.module.css';

function NavigationBar() {
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [profileData, setProfileData] = useState({});

  const getProfileData = async (path) => {
    const { data }  = await getUserInfo(path);
    
    if (!data) return;

    setProfileData(...data);
    setIsLoginStatus(true);
  }

  useEffect(() => {
    getProfileData('/users/1');
  }, [])

  return (
    <nav className={styles.nav}>
      <img src={LinkbraryLogo} alt='logo'/>
      {isLoginStatus ? (
        <div className={styles.account}>
          <img src={profileData.image_source} alt='profile' />
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
