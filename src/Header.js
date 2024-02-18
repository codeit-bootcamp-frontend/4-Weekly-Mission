import { useEffect, useState } from "react";
import logo from './assets/logo.svg';

export function Header() {
  const [profileDatas, setProfileDatas] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const getProfileData = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/user"
      );
      const result = await response.json();
      const { id, name, email, profileImageSource } = result;
      console.log(id, name, email, profileImageSource);
      setProfileDatas((prevProfileDatas) => ({
        ...prevProfileDatas,
        id: id,
        name: name,
        email: email,
        profileImageSource: profileImageSource,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <nav>
      <div class="logo">
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
      </div>
      {profileDatas.name ? (
        <div>로그인 프로파일</div>
      ) : (
        <a href="signin.html">
          <button class="login-button button">로그인</button>
        </a>
      )}
    </nav>
  );
}