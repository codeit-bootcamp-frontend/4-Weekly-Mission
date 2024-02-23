import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import logo from 'assets/images/logo.svg';
import DefaultProfileImg from 'assets/images/profile-img.png';

import useFetch from 'hooks/useFetch';

import ErrorMessage from 'components/Common/ErrorMessage';
import LoginButton from 'components/Common/LoginButton';
import styles from 'components/Header/Gnb.module.css';

import { getUserApiUrl } from 'services/api';

import scrollToTop from 'utils/scrollToTop';

// 글로벌 네비게이션 바
function Gnb() {
  const FOLDER_LOCATION = '/folder';
  const LOADING_MESSAGE = 'Loading...';

  const url = getUserApiUrl();
  const { data, loading, error } = useFetch(url);

  // data를 가공하여 userInfo에 저장
  const userInfo = data?.data[0] ?? null;

  // 페이지 경로 저장
  const { pathname } = useLocation();

  const userProfileImg = userInfo?.profileImageSource || DefaultProfileImg;
  const userEmail = userInfo?.email ?? '';

  // /folder에서는 position-fixed 제거
  const navClasses = classNames(styles.gnb, { 'position-fixed': pathname !== FOLDER_LOCATION }, 'margin-auto', 'z-top');
  const containerClasses = classNames('flex-row', 'align-center', 'justify-space-between');
  const logoClasses = classNames(styles['gnb-logo']);
  const profileClasses = classNames(styles['gnb-profile'], 'flex-row', 'align-center');
  const profileImgClasses = classNames(styles['profile-img']);
  const profileEmailClasses = classNames(styles['profile-email'], 'hidden-block-mobile-only', 'text-color-gray100');
  // gnb의 position-fixed에 대한 더미
  const navDummyClasses = classNames({ [styles['nav-dummy']]: pathname !== FOLDER_LOCATION });

  return (
    <div>
      <nav className={navClasses}>
        <div className={containerClasses}>
          <Link to="/" onClick={scrollToTop}>
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
          {loading && <ErrorMessage message={LOADING_MESSAGE} />}
          {error && <ErrorMessage message={error} />}
        </div>
      </nav>
      {/* 더미 요소로 공간 차지 */}
      <div className={navDummyClasses} />
    </div>
  );
}

export default Gnb;
