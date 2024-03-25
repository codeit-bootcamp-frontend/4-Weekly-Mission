import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import linkbraryLogo from '../../../assets/linkbrary-logo.svg';
import { User } from '../../../types/api';

function Header({ user }: { user: User }) {
  const { pathname } = useLocation();
  const headerPosition = pathname === '/folder' ? styles.static : '';

  return (
    <header className={`${styles.headerArea} ${headerPosition}`}>
      <div className={styles.headerGroup}>
        <a href="/" className={styles.logoArea}>
          <img src={linkbraryLogo} alt="로고" className={styles.logoImg} />
        </a>
        <button className={styles.btnGroup}>
          {user ? (
            <>
              <img src={user.imageSource} alt="프로필 사진" className={styles.userProfile} />
              <span className={styles.userEmail}>{user.email}</span>
            </>
          ) : (
            <a className={styles.btn} href="/signin.html">
              로그인
            </a>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
