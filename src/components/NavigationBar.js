import Linkbrary from "../assets/logo.svg";
import "./NavigationBar.css";

export default function NavigationBar({ profile }) {
  return (
    <div className="nav">
      <div className="navFrame">
        <img id="Linkbrary" src={Linkbrary} alt="Linkbrary" />

        {profile ? (
          <>
            <div className="account">
              <img
                id="MyProfile"
                src={profile.profileImageSource}
                alt="MyProfile"
              ></img>
              <span id="Email">{profile.email}</span>
            </div>
          </>
        ) : (
          <>
            <button>로그인</button>
          </>
        )}
      </div>
    </div>
  );
}
