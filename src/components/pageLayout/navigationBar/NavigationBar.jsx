import { useEffect, useState } from "react";
import Header from "./Header";
import LinkLogo from "./LinkLogo";
import UserProfileImg from "./UserProfileImg";
import StyledLink from "./StyledLink";
import UserProfileContainer from "./UserProfileContainer";
import StyledLoginLink from "./StyledLoginLink";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useUserProfile } from "../../ContextProvider";

function NavigationBar() {
  const location = useLocation();
  const { userProfile } = useUserProfile();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const memoizedEmailText = useMemo(
    () => (windowWidth > 768 ? userProfile?.email : ""),
    [userProfile, windowWidth]
  );

  const isHeaderSticky = () =>
    location.pathname !== "/folder" && location.pathname !== "/";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Header sticky={isHeaderSticky()}>
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
            <span>{memoizedEmailText}</span>
          </UserProfileContainer>
        ) : (
          <StyledLoginLink to="/signin">로그인</StyledLoginLink>
        )}
      </div>
    </Header>
  );
}

export default NavigationBar;
