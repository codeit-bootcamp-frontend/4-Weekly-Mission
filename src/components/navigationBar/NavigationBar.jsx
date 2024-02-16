import { useEffect, useState } from "react";
import { getSharedUserSample } from "../util/api";
import Header from "./Header";
import LinkLogo from "./LinkLogo";
import UserProfileImg from "./UserProfileImg";
import StyledLink from "./StyledLink";
import UserProfileContainer from "./UserProfileContainer";
import StyledLoginLink from "./StyledLoginLink";

function NavigationBar() {
  const [userProfile, setUserProfile] = useState(null);
  const handleSharedUserProfile = async () => {
    const result = await getSharedUserSample();
    if (!result) return;

    const { email, profileImageSource } = result;
    setUserProfile({ email, profileImageSource });
  };

  useEffect(() => {
    handleSharedUserProfile();
  }, []);

  return (
    <Header>
      <div>
        <StyledLink to="/landing">
          <LinkLogo />
        </StyledLink>
        {userProfile ? (
          <UserProfileContainer>
            <UserProfileImg
              src={userProfile.profileImageSource}
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
