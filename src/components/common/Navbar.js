import '../../assets/styles/Navbar.css';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { getUserInfo } from '../../api';

const UserInfo = ({ email, imgSrc }) => {
  return (
    <div className="userInfo">
      <img id="userImg" src={imgSrc} alt="userImage" />
      <span id="userEmail">{email}</span>
    </div>
  );
};

const Nav = () => {
  const { result } = useAsync(getUserInfo);
  const { data } = result || {};
  const initialUserData = { email: '', image_source: '' };
  const userData = data ? data[0] : initialUserData;
  const { email, image_source } = userData;

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img src={logoImg} alt="logo" id="logoImg" />
        </Link>
        {email ? (
          <UserInfo email={email} imgSrc={image_source} />
        ) : (
          <button className="color-btn">로그인</button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
