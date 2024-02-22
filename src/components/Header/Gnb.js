import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from 'assets/images/logo.svg';
import DefaultProfileImg from 'assets/images/profile-img.png';

import ErrorMessage from 'components/Common/ErrorMessage';
import LoginButton from 'components/Common/LoginButton';

import { getUserInfo } from 'services/api';

import styles from './Gnb.module.css';

// 글로벌 네비게이션 바
function Gnb() {
  const FOLDER_LOCATION = '/folder';

  // 유저 정보 가져오기
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { pathname, state, search } = useLocation();

  console.log(pathname); // 현재 URL의 경로명을 출력
  console.log(state); // location에 전달된 상태를 출력
  console.log(search); // URL의 쿼리 문자열을 출력

  const handleLoadUser = async () => {
    try {
      const result = await getUserInfo();
      setUserInfo(result.data[0]);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // 로고 클릭 시 페이지 최상단으로 이동
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  const userProfileImg = userInfo?.profileImageSource || DefaultProfileImg;
  const userEmail = userInfo?.email ?? '';

  // /folder에서는 position-fixed 제거
  const navClasses = classNames(styles.gnb, { 'position-fixed': pathname !== FOLDER_LOCATION }, 'margin-auto', 'z-top');
  const containerClasses = classNames(styles['gnb-container'], 'flex-row');
  const logoClasses = classNames(styles['gnb-logo']);
  const profileClasses = classNames(styles['gnb-profile'], 'flex-row');
  const profileImgClasses = classNames(styles['profile-img']);
  const profileEmailClasses = classNames(styles['profile-email'], styles.hidden, 'hidden', 'text-color-gray100');
  // gnb의 position-fixed에 대한 더미
  const navDummyClasses = classNames({ [styles['nav-dummy']]: pathname !== FOLDER_LOCATION });

  return (
    <div>
      <nav className={navClasses}>
        <div className={containerClasses}>
          <Link to="/" onClick={handleLogoClick}>
            <img className={logoClasses} src={logo} alt="logo" />
          </Link>
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
      {/* 더미 요소로 공간 차지 */}
      <div className={navDummyClasses} />
    </div>
  );
}

export default Gnb;
