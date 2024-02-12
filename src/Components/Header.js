import React from "react";
import logo from "../Assets/image/logo.png";
import "../Styles/Header.css";

export function Header({ profile, folder }) {
  return (
    <>
      <nav>
        <div className="nav">
          <div>
            <a href="index.html">
              <img className="logo" src={logo} alt="로고 사진" />
            </a>
          </div>
          {profile ? (
            <div className="profile">
              <img
                src={profile.image}
                alt="userProfileImg"
                className="profileImg"
              ></img>
              <span className="userEmail">{profile.email}</span>
            </div>
          ) : (
            <a href="../Pages/signIn.html" className="loginBtn btnS">
              로그인
            </a>
          )}
        </div>
      </nav>

      <header>
        <div className="folder">
          <div className="folderProfile">
            <img
              src={folder.userProfileImage}
              className="folderImg"
              alt="userProfileImg"
            ></img>
            <p className="folderProfileName">{folder.userName}</p>
          </div>
          <div>
            <h2 className="folderName">{folder.folderName}</h2>
          </div>
        </div>
      </header>
    </>
  );
}
