import logo from "../assets/logo.svg";
import "./Header.css";

function userInformation({ user }) {
  if (!user) return false;
  const { email, profileImageSource } = user;
  return (
    <div>
      <img className="logo" src={profileImageSource} alt={profileImageSource} />
      <span>{email}</span>
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      <div className="nav-space">
        <div className="nav">
          <a href="/">
            <img src={logo} alt={logo} />
          </a>
          {user ? userInformation({ user }) : <button>Login</button>}
        </div>
      </div>
    </header>
  );
}

export default Header;
