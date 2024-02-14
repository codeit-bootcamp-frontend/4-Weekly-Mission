import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Gnb.module.css';
import { getUserInfo } from '../../services/api';
import LoginButton from '../Common/LoginButton';
import logo from '../../assets/images/logo.svg';
import ErrorMessage from '../Common/ErrorMessage';

// 글로벌 네비게이션 바
function Gnb() {
  // 유저 정보 가져오기
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadUser = async () => {
    try {
      const result = await getUserInfo();
      setUserInfo(result);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  const userProfileImg = userInfo?.profileImageSource || '';
  const userEmail = userInfo?.email || '';

  const navClasses = classNames(styles.gnb, 'position-fixed', 'margin-auto', 'z-top');
  const containerClasses = classNames(styles['gnb-container'], 'flex-row');
  const logoClasses = classNames(styles['gnb-logo']);
  const profileClasses = classNames(styles['gnb-profile'], 'flex-row');
  const profileImgClasses = classNames(styles['profile-img']);
  const profileEmailClasses = classNames(styles['profile-email'], styles.hidden, 'hidden', 'text-color-gray100');

  return (
    <nav className={navClasses}>
      <div className={containerClasses}>
        <img className={logoClasses} src={logo} alt="logo" />
        {userInfo ? (
          <div className={profileClasses}>
            <img className={profileImgClasses} src={userProfileImg} alt="profile-img" />
            <p className={profileEmailClasses}>{userEmail}</p>
          </div>
        ) : (
          <LoginButton />
        )}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    </nav>
  );
}

export default Gnb;
