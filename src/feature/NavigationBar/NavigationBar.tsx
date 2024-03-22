import { ROUTE } from "../../util/constant";
import Cta from "../../ui/Cta/Cta";
import Profile from "../../ui/Profile/Profile";
import "./NavigationBar.css";

interface Props {
  isNavFixed: boolean;
  profile: any;
}

const NavigationBar = ({ profile, isNavFixed }: Props) => {
  const NavBar: string = isNavFixed
    ? "NavigationBar Nav-fixed"
    : "NavigationBar";
  return (
    <nav className={NavBar}>
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img
            className="NavigationBar-logo"
            src="images/linkbrary.svg"
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta isSmall>
              <span className="NavigationBar-signin">로그인</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
