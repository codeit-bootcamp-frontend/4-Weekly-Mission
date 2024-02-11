import "./Navbar.css";

export default function NavBar({ profile }) {
  return (
    <nav className="gnb">
      <div className="gnb-items">
        <a href="/">
          <img className="gnb-logo" src="images/linkbrary.svg" alt="logo"></img>
        </a>

        {profile ? (
          <a className="gnb-profile" href="/profile">
            <img src={profile.profileImageSource}></img>
            <span className="gnb-email">{profile.email}</span>
          </a>
        ) : (
          <a className="gnb-login" href="/login">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}
