import { useGetUser } from "../../hooks/useGetUser";
import LinkbraryLogo from "../../asset/images/logo.svg";
import "./NavigationBar.css";
import Cta from "../Cta/Cta";
import Profile from "../Profile/Profile";

const NavigationBar = () => {
  const { data } = useGetUser();
  const { email, image_source } = data?.data[0] ?? {};
  const profile = data ? { email, image_source } : null;
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar__items">
        <h1>
          <a href="/">
            <img
              className="NavigationBar__logo"
              src={LinkbraryLogo}
              alt="Linkbrary"
            />
          </a>
        </h1>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href="/">
            <Cta>로그인</Cta>
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
