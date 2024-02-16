import profileImg from '../assets/myprofile.svg';
import logoImg from '../assets/logo.svg';
import './HeaderArea.css';

const LogoArea = () => {
  return (
    <div className="logo_area">
      <img className="logo_img" src={logoImg} alt="logo" />
    </div>
  );
};

const Profile = ({ email }) => {
  return (
    <div className="profile_area">
      <div className="profile_background">
        <img className="profile_img" src={profileImg} alt="profile" />
      </div>
      <p className="profile_id">{email}</p>
    </div>
  );
};

const LoginButton = () => {
  return <button className="login_btn">로그인</button>;
};

const HeaderArea = ({ email }) => {
  return (
    <div className="header_area">
      <LogoArea></LogoArea>
      {email ? <Profile email={email}></Profile> : <LoginButton></LoginButton>}
    </div>
  );
};

export default HeaderArea;
