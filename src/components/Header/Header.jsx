import logo from '../../images/logo.svg';
import styles from './Header.module.scss';
import Profile from './Profile/Profile';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>
      <Profile />
    </header>
  );
}

export default Header;
