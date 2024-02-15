import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <img className = "main-logo" alt = "Linkbrary logo." />

        <div className>
          <img className="profile-image" alt="Profile image." />
          <p className="profile-email">This is email address</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;