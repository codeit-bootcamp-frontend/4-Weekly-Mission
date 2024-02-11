import { useEffect, useState } from "react";
import mainLogo from "../../assets/common/logo.svg";
import myProfileImg from "../../pages/shared/assets/myprofile.svg";
import "./NavBar.css";

function NavBar() {
  const [user, setUser] = useState({ email: "" });

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => response.json())
      .then((data) => setUser({ email: data.email }));
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img src={mainLogo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user.email ? (
          <div className="user-box">
            <div className="user-img-bg">
              <img className="user-img" src={myProfileImg} alt="프로필 이미지" />
            </div>
            <span className="user-email">{user.email}</span>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
