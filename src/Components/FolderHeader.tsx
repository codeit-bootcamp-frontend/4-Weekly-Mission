import logo from "../images/logo.svg";
import { Profile } from "../APIs/FolderPageApi";

interface Props {
  profile?: Profile;
}

export function FolderHeader({ profile }: Props) {
  return (
    <>
      <header className="headerArea">
        <nav>
          <div className="navBar">
            <a href="index.html">
              <img src={logo} alt="logo" className="logo" />
            </a>
            {profile?.email ? (
              <div className="profile">
                <img
                  src={profile.image || ""}
                  alt="userProfileImg"
                  className="profileImg"
                ></img>
                <span className="userEmail">{profile.email}</span>
              </div>
            ) : (
              <a href="../Pages/signIn.html" className="btn btnS">
                로그인
              </a>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
