import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { getUser } from '../../utils/api';
import UserProfile from '../UserProfile/UserProfile';
import GradientButton from '../common/GradientButton/GradientButton';

import styles from './Header.module.scss';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const hasUser = Object.keys(user).length;

  const location = useLocation();
  const isFolderPage = location.pathname === '/folder';

  const fetchUserData = async () => {
    try {
      const user = await getUser();
      setUser(user);
      sessionStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={`${styles.layout} ${isFolderPage && styles.fixed}`}>
      <div className={styles.box}>
        <Link to='/'>
          <img className={styles.linkbraryLogo} src='assets/icons/linkbrary-logo.svg' alt='linkbrary' />
        </Link>
        <Link to='/folder'>folder</Link>
        <Link to='/shared'>shared</Link>

        {hasUser ? (
          <UserProfile title={user.email} image={{ URL: user.profileImageSource, size: '2rem' }} />
        ) : (
          <GradientButton onClick={fetchUserData}>로그인</GradientButton>
        )}
      </div>
    </header>
  );
};

export default Header;
