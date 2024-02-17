import { useEffect, useState } from "react";
import { getSharedUserSample } from "../util/api";
import Header from "./Header";
import LinkLogo from "./LinkLogo";
import UserProfileImg from "./UserProfileImg";
import StyledLink from "./StyledLink";
import UserProfileContainer from "./UserProfileContainer";
import StyledLoginLink from "./StyledLoginLink";
import { useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  const [userProfile, setUserProfile] = useState(null);
  const handleSharedUserProfile = async () => {
    const result = await getSharedUserSample();
    if (!result) return;

    const { email, image_source } = result.data[0];
    setUserProfile({ email, image_source });
  };

  useEffect(() => {
    handleSharedUserProfile();
  }, []);

  const isSticky = () => {
    if (location.pathname === "/folder" || location.pathname === "/")
      return false;
    return true;
  };

  return (
    <Header sticky={isSticky()}>
      <div>
        <StyledLink to="/landing">
          <LinkLogo />
        </StyledLink>
        {userProfile ? (
          <UserProfileContainer>
            <UserProfileImg
              src={userProfile.image_source}
              alt="userProfileImg"
            />
            <span>{userProfile.email}</span>
          </UserProfileContainer>
        ) : (
          <StyledLoginLink to="/signin">로그인</StyledLoginLink>
        )}
      </div>
    </Header>
  );
}

export default NavigationBar;
