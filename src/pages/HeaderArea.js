import Profile from '../components/Profile';
import Logo from '../components/Logo';
import LoginButton from '../components/LoginButton';
import './HeaderArea.css';

const HeaderArea = ({ email }) => {
  return (
    <div className="header_area">
      <Logo></Logo>
      {email ? <Profile email={email}></Profile> : <LoginButton></LoginButton>}
    </div>
  );
};

export default HeaderArea;
