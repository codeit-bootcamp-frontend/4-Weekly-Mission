import { useEffect, useState } from "react";
import * as S from "./Header.style";

const Header = () => {
  const [user, setUser] = useState({
    name: "",
    proifleImg: "",
  });

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser({ name: data.name, proifleImg: data.profileImageSource });
      });
  }, []);
  return (
    <header>
      <S.Container>
        <div className="user-box">
          <img
            className="user-profile"
            src={user.proifleImg}
            alt="프로필 이미지"
          />
          <p className="user-name">@{user.name}</p>
        </div>
        <p className="menu">⭐️ 즐겨찾기</p>
      </S.Container>
    </header>
  );
};

export default Header;
