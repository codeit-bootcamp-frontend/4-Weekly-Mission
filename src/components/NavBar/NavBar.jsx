import LoginButton from "../LoginButton/LoginButton";
import Profile from "../Profile/Profile";
import "./NavBar.css";

const ROUTE = {
  homePage: "/",
  loginPage: "/signin",
  privacyPage: "/privacy",
  FAQ: "/faq",
};

const LOGIN_TEXT = {
  login: "LOGIN",
};

const LOGO_IMAGE = "images/logo.png";

const NavBar = ({ profile }) => {
  return (
    <nav className="NavBar">
      <div className="NavBarItems">
        <a href={ROUTE.homePage}>
          <img className="NavBarLogo" src={LOGO_IMAGE} alt="Linkbrary 로고" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.loginPage}>
            <LoginButton>
              <span className="NavBarSignin">{LOGIN_TEXT.login}</span>
            </LoginButton>
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
