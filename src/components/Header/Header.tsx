import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GET_USER_API_URL } from '../../constant/constant';
import { AuthContext } from '../../context/AuthContext';
import createAxiosInstance from '../../utils/axios';
import { cn } from '../../utils/classNames';
import UserProfile from '../UserProfile/UserProfile';
import { FetchUserResponse } from './Header.types';
import styles from './Header.module.scss';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const hasUser = user && Object.keys(user).length !== 0;
  const location = useLocation();
  const isFolderPage = location.pathname === '/folder';

  const fetchUserData = async () => {
    const axios = createAxiosInstance();
    try {
      const { data: userData } = await axios.get<FetchUserResponse>(GET_USER_API_URL);
      setUser(userData.data[0]);
      sessionStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={cn(styles.layout, isFolderPage && styles.fixed)}>
      <div className={styles.box}>
        <Link to='/'>
          <img className={styles.linkbraryLogo} src='assets/icons/linkbrary-logo.svg' alt='linkbrary' />
        </Link>
        <Link to='/folder'>folder</Link>
        <Link to='/shared'>shared</Link>
        {hasUser ? (
          <UserProfile title={user.email} image={user.image_source} size='sm' />
        ) : (
          <button className={styles.loginButton} onClick={fetchUserData}>
            로그인
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
