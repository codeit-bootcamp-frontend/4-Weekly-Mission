import Logo from './Logo';
import Login from './Login';
import './Header.css';

function Header({ user }) {
  return (
    <header className="header">
      <Logo />
      <Login user={user} />
    </header>
  );
}

export default Header;
