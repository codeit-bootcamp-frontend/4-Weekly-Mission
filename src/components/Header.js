import logo from "../assets/logo.svg";
import "./Header.css";
import useUser from "../hooks/useUser.js";

function userInformation({ user }) {
  if (!user) return null;
  const { email, profileImageSource } = user;
  return (
    <div>
      <img className="logo" src={profileImageSource} alt={profileImageSource} />
      <span>{email}</span>
    </div>
  );
}

function Header() {
  const user = useUser();
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
