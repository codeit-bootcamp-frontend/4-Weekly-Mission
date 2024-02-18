import { useNavigate } from 'react-router-dom';
import Button from './common/Button';
import logo from '../images/logo.svg';
import './Nav.css';

export default function Nav({ currentUserData }) {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="navFrame">
        <div onClick={() => navigate('/')}>
          <img src={logo} alt="로고이미지" />
        </div>
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
