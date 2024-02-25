import logo from "../assets/logo.svg";
import "./Header.css";
import useUser from "../hooks/useUser.js";

function UserInformation({ user }) {
  if (!user) return null;
  const { email, image_source } = user;
  return (
    <div className="profileContainer">
      <img className="logo" src={image_source} alt="프로필 이미지" />
      <span>{email}</span>
    </div>
  );
}

function Header() {
  const user = useUser();
  return (
    <header className="nav-space">
      <nav className="nav">
        <a href="/">
          <img src={logo} alt={logo} />
        </a>
        {user ? (
          UserInformation({ user })
        ) : (
          <button className="headerButton">Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
