import { Profile } from "../Profile/Profile";
import { Cta } from "../Cta/Cta";
import "./NavigationBar.css";

export const NavigationBar = ({ profile }) => {
  return (
    <nav className="Nav">
      <div className="Nav-item">
        <a href="/">
          <img
            className="Nav-logo"
            src="images/linkbrary.svg"
            alt="Linkbrary-logo"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href="/signin">
            <Cta isSmall>
              <span className="Nav-signin">로그인</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
