import styles from './Header.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { SharedUser } from '../../types/type';

import logo from '../../assets/images/logo.svg';

interface Props {
  userInfo: SharedUser;
  isSticky?: boolean;
}

const Header = ({ userInfo, isSticky = true }: Props) => {
  const profileImage = userInfo?.profileImageSource;
  const profileEmail = userInfo?.email;
  const sticky = isSticky ? 'sticky' : '';

  return (
    <header className={sticky}>
      <nav>
        <img className={cn('main-logo')} src={logo} alt="링크라이브러리 로고." />
        {userInfo ? (
          <div className={cn('profile')}>
            <img className={cn('profile-image')} src={profileImage} alt="사용자의 프로필 이미지." />
            <p className={cn('profile-email')}>{profileEmail}</p>
          </div>
        ) : (
          <a className={cn('button-login', 'button-gradient')} href="/">
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
