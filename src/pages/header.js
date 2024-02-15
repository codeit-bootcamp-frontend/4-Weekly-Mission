import '../styles/header.css'
import logo from '../assets/logo/logo.svg'

const Header = () => {
  return (
    <header>
      <nav>
        <img className = "main-logo" src = {logo} alt = "Linkbrary logo." />

        <div className>
          <img className="profile-image" src = {logo} alt="Profile." />
          <p className="profile-email">This is email address</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;