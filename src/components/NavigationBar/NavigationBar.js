import "./NavigationBar.css";
import { Profile } from "../Profile/Profile";

function NavigationBar({ profile }) {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href="/">
          <img
            className="NavigationBar-logo"
            src="/images/linkbrary.svg"
            alt="로고 이미지"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <button className="NavigationBar-signin">로그인</button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
