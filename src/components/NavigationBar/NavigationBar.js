import "./NavigationBar.css";
import { Profile } from "../Profile/Profile";
import useGetUser from "../../hooks/useGetUser";

function NavigationBar() {
  const { data } = useGetUser();
  const { profileImageSource, email } = data || {};
  const profile = data ? { profileImageSource, email } : null;

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
          <Profile {...profile} />
        ) : (
          <button className="NavigationBar-signin">로그인</button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
