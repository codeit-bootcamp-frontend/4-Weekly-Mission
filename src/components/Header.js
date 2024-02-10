import '../style/Header.css';
import IsLoggedInUser from './IsLoggedInUser';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <IsLoggedInUser />
      </div>
    </header>
  );
}

export default Header;
