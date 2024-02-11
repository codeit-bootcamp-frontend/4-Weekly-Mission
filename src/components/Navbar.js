import LinkbraryLogo from '../images/logo.svg';
import profile from '../images/profile_img.png';
import '../css/Navbar.css';

function NavigationBar() {
  return (
    <nav className='nav'>
      <img src={LinkbraryLogo} alt='logo'/>
      <div className='account'>
        <img src={profile} alt='profile'/>
        <p>Codeit@codeit.com</p>
      </div>
    </nav>
  )
}

export default NavigationBar;