import React from "react";
import logo from "../images/logo.svg";
import linkIcon from "../images/link.svg";

export function FolderHeader({ profile }) {
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
          <form>
            <label className="linkInputArea">
              <input
                placeholder="링크를 추가해 보세요"
                className="addLinks"
              ></input>
              <img src={linkIcon} alt="link icon" className="linkIcon"></img>
              <button className="addBtn">추가하기</button>
            </label>
          </form>
        </nav>
      </div>
    </>
  );
}
