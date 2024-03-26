import logo from '../assets/logo.svg';
import './Header.css';
import useUser from '../hooks/useUser';

interface User {
  email: string;
  image_source: string;
}

const UserInformation = ({ user }: { user: User }) => {
  if (!user) return null;
  const { email, image_source } = user;
  return (
    <div className='profileContainer'>
      <img className='logo' src={image_source} alt='프로필 이미지' />
      <span>{email}</span>
    </div>
  );
};

const Header = () => {
  const user = useUser();
  return (
    <header className='nav-space'>
      <nav className='nav'>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
        {user ? (
          <UserInformation user={user} />
        ) : (
          <button className='headerButton'>Login</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
