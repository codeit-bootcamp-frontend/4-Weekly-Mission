import { useEffect, useState } from "react";
import { acceptDataFromApi } from "src/Utils/Api";
import { Link } from "react-router-dom";
import * as S from "./HeadNav.style";

const ProfileData = function () {
  const [loginStatus, setLoginStatus] = useState(false);
  const [accountEmail, setAccountEmail] = useState("");
  const [profileImg, setProfileIMg] = useState("navProfileImg.png");

  const USER = "users/1";
  const accountVerification = async (user: string) => {
    const receivedData = await acceptDataFromApi(user);
    if (!receivedData) return;
    const {
      data: [{ email, image_source }],
    } = receivedData;

    setAccountEmail(email);
    if (image_source) {
      setProfileIMg(image_source);
    }
    setLoginStatus(true);
  };

  useEffect(() => {
    accountVerification(USER);
  }, [loginStatus]);

  return (
    <>
      {loginStatus && (
        <S.NavProfileSection className="nav-profile">
          <img src={profileImg} alt="loggedInProfileImg" />
          {accountEmail}
        </S.NavProfileSection>
      )}

      {!loginStatus && (
        <Link to="html/signin.html">
          <S.NavLoginButton>로그인</S.NavLoginButton>
        </Link>
      )}
    </>
  );
};

export default function HeadNav({ isSticky = true }) {
  return (
    <S.Nav $isSticky={isSticky}>
      <S.NavWrapper>
        <Link to="/">
          <img src="logo.svg" alt="Linkbrary Logo" />
        </Link>
        <ProfileData />
      </S.NavWrapper>
    </S.Nav>
  );
}
