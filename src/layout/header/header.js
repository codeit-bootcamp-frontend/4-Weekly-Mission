import React from "react";
import "./header.css";
import Logo from "../../assets/logo/logo.svg";
import { useProfile } from "../../hooks/useProfile";
import { UserProfileBox } from "../../components/profile/userProfileBox";

export const Header = () => {
  const { profile } = useProfile();
  console.log("profile", profile?.name);
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="nav">
          <img src={Logo} alt="mainLogo" className="logo" />
          {profile ? (
            <UserProfileBox
              imageSrc={profile.profileImageSource}
              email={profile.email}
            />
          ) : (
            <button className="button">로그인</button>
          )}
        </div>
      </div>
    </div>
  );
};
