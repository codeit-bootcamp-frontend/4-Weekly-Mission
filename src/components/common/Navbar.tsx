import '../../assets/styles/Navbar.css';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { getUserInfo } from '../../api';

interface UserInfoProps {
  email: string;
  imgSrc: string;
}
interface UserData {
  email: string;
  image_source: string;
}

const UserInfo = ({ email, imgSrc }: UserInfoProps) => {
  return (
    <div className="userInfo">
      <img id="userImg" src={imgSrc} alt="userImage" />
      <span id="userEmail">{email}</span>
    </div>
  );
};

const Nav = () => {
  const { result } = useAsync(getUserInfo);
  const data = result ? result['data'] : [];
  const initialUserData: UserData = { email: '', image_source: '' };
  const userData = data.length > 0 ? data[0] : initialUserData;
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
