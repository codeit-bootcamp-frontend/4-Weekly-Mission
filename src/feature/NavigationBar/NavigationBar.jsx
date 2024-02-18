import { ROUTE } from "util/constant";
import { Cta } from "../../ui/Cta";
import { Profile } from "../../ui/Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { NavigationBarContainer, NavigationBarItems, NavigationBarLogo, NavigationBarSignIn } from "./NavigationBarCss";

export const NavigationBar = ({ profile }) => {
  return (
    <NavigationBarContainer>
      <NavigationBarItems>
        <a href={ROUTE.랜딩}>
          <NavigationBarLogo src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta isSmall>
              <NavigationBarSignIn>{TEXT.login}</NavigationBarSignIn>
            </Cta>
          </a>
        )}
      </NavigationBarItems>
    </NavigationBarContainer>
  );
};
