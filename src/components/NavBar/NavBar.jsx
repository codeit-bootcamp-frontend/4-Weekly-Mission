import logo from '../../assets/logo.png';
import ProfileId from './ProfileId';
import Styles from '../../styles/FolderPage.module.css';

const NavBar = () => {
  return (
    <div className={Styles.Nav}>
      <img className={Styles.logo} src={logo} alt='logo' />
      <ProfileId />
    </div>
  );
};

export default NavBar;
