import React from "react";
import logo from "../Assets/image/logo.svg";

export interface UserProfile {
  image: string;
  email: string;
}

interface NavProps {
  profile: UserProfile | null;
}

export function Nav({ profile }: NavProps) {
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
    </>
  );
}
