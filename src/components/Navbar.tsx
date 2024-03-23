import LinkbraryLogo from '../images/logo.svg';
import styles from '../css/Navbar.module.css';

interface Props {
  className: string;
  profileData: {
    profileImageSource: string,
    email: string,
  };
  isLoginStatus: boolean;
  }

function NavigationBar({ className, profileData, isLoginStatus }: Props) {
  return (
    <nav className={`${styles.nav} ${styles[className]}`}>
      <img src={LinkbraryLogo} alt='logo'/>
      {isLoginStatus ? (
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
