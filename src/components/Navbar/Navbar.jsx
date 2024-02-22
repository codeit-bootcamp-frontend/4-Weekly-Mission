import "./Navbar.css";
import LoginCTA from "../styled/LoginCTA";

export default function Navbar({ profile }) {
  return (
    <nav className="gnb">
      <div className="gnb-items">
        <a href="/">
          <img className="gnb-logo" src="images/linkbrary.svg" alt="logo"></img>
        </a>
        {profile ? (
          <a className="gnb-profile" href="/profile">
            <img src={profile.image_source} alt="user profile"></img>
            <span className="gnb-email">{profile.email}</span>
          </a>
        ) : (
          <LoginCTA href="/login" as="a">
            로그인
          </LoginCTA>
        )}
      </div>
    </nav>
  );
}
