import './Nav.css';
import useSampleData from '../hooks/useSampleData';
import logo from '../images/logo.svg';
import Button from './common/Button';

export default function Nav() {
  const loginUserData = useSampleData('user');

  return (
    <div className="nav">
      <div className="navFrame">
        <img src={logo} alt="로고이미지" />
        {loginUserData ? (
          <div className="accountArea">
            <img src={loginUserData.profileImageSource} alt="프로필이미지" />
            <span>{loginUserData.email}</span>
          </div>
        ) : (
          <Button content="로그인" />
        )}
      </div>
    </div>
  );
}
