import "./MainPageGNB.css";
import UserProfile from "../UserProfile";

export default function MainPageGNB({ user, isLogin }) {
  return (
    <nav className="gnb">
      <div className="gnb-wrapper">
        <a type="button" className="logo" href="./">
          <img src="images/logo.svg" alt="LinkBrary" />
        </a>
        {isLogin ? (
          <UserProfile user={user} />
        ) : (
          <a type="button" className="login-btn" href="./signin.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}
