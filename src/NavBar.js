import "./NavBar.css";
import Profile from "./Profile.js";

function NavBar({ profile }) {
  return (
    <header>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img
              className="linkbrary"
              src="image/logo/Linkbrary.svg"
              alt="Linkbrary"
            />
          </a>
          {profile ? (
            <Profile profile={profile} />
          ) : (
            <a className="login" href="/signin">
              로그인
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
