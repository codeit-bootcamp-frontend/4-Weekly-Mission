import React from "react";
import logo from "../images/logo.svg";

export function Header({ profile, folder }) {
  return (
    <>
      <div className="headerArea">
        <nav>
          <div className="navBar">
            <a href="index.html">
              <img src={logo} alt="logo" className="logo" />
            </a>
            {profile.email ? (
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
        <header>
          {/* <div className="folderProfile">
            <img src={folder.profileImage || ""} alt="폴더소유자프로필사진" className="folderImg"/>
            <p className="folderProfileName">{folder.profileName}</p>
            <h2 className="folderName">{folder.folderName}</h2>
          </div> */}
        </header>
      </div>
    </>
  );
}
