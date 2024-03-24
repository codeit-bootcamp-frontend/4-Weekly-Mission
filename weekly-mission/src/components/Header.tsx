import logoImg from "assests/img/logo.png";
import { profileDataApi } from "api";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Login from "./LoginBtn";
import * as S from "./Header.styled";
import { ProfileDataType } from "typeStore";

const Header: React.FC = () => {
  const [userData, setUserData] = useState<ProfileDataType>();

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await profileDataApi();
      setUserData(data);
    };
    getUserProfile();
  }, []);

  return (
    <S.Header>
      <S.HeaderInner>
        <a href="/">
          <img src={logoImg} alt="Linkbrary 로고 이미지" />
        </a>
        {userData ? <Profile userData={userData} /> : <Login />}
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
