import Button from './common/Button';
import logo from '../images/logo.svg';
import './Nav.css';

export default function Nav({ currentUserData }) {
  return (
    <div className="nav">
      <div className="navFrame">
        <img src={logo} alt="로고이미지" />
        {currentUserData ? (
          <div className="accountArea">
            <img src={currentUserData.profileImageSource || currentUserData.image_source} alt="프로필이미지" />
            <span>{currentUserData.email}</span>
          </div>
        ) : (
          <Button>로그인</Button>
        )}
      </div>
    </div>
  );
}
