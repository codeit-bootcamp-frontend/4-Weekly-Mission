import logo from "../assets/logo.svg";
import "./Header.css";

function Header({ user }) {
  if (!user) {
    return (
      <header>
        <div className="nav-space">
          <div className="nav">
            <a href="/">
              <img src={logo} alt={logo} />
            </a>
            <div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const { email, profileImageSource } = user;
  return (
    <header>
      <div className="nav-space">
        <div className="nav">
          <a href="/">
            <img src={logo} alt={logo} />
          </a>
          <div>
            <img
              className="logo"
              src={profileImageSource}
              alt={profileImageSource}
            />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
