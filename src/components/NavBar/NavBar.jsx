import logo from '../../assets/logo.png';
import ProfileId from './ProfileId';
import '../../styles/NavBar.css';
import Styles from '../../styles/Folder.module.css';

const NavBar = () => {
  return (
    <div className={Styles.Nav}>
      <img className={Styles.logo} src={logo} alt='logo' />
      <ProfileId />
    </div>
  );
};
export default NavBar;
