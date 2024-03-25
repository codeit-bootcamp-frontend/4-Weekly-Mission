import React from "react";
import "./NavigationBar.css";
import logoImg from "../../assets/linkbrary-logo.png";
import { User } from "../../pages/FolderPage";
import { SampleUser } from "../../pages/FolderSharedPage";

interface Props {
  userInfo: User | SampleUser | undefined;
}

function NavigationBar({ userInfo }: Props) {
  return (
    <div className="NavigationBar">
      <div className="container">
        <a href="/">
          <img src={logoImg} alt="logo" />
        </a>
        {userInfo ? (
          <div className="user_information">
            <img
              src={userInfo.profileImageSource || userInfo["image_source"]}
              alt="user image"
              className="user_image"
            />
            <span className="user_email">{userInfo.email}</span>
          </div>
        ) : (
          <button className="login_button">로그인</button>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
