import { LoginButton } from "./Contain/LoginButton/";
import { Profile } from "./Contain/Profile";
import "./NavigationBar.css";

export const NavigationBar = ({ profile }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href="/">
          <img
            className="NavigationBar-logo"
            src="Images/logo.svg"
            alt="메인 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href="/signin">
            <LoginButton isSmall>
              <span className="NavigationBar-signin">로그인</span>
            </LoginButton>
          </a>
        )}
      </div>
    </nav>
  );
};
