import React, { useState, useEffect } from "react";
import linkbrary from "../../images/linkbrary.svg";
import profileImg from "../../images/myprofile.svg";
import "./Navigation.css";

const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <nav className="Navigation">
      <div className="Wrap">
        <a href="/">
          <img src={linkbrary} alt="링크브러리 로고" />
        </a>
        {user ? (
          <div className="My-profile">
            <img
              className="Profile-img"
              src={profileImg}
              alt="나의 프로필 이미지"
            />
            <span className="Profile-email">{user.email}</span>
          </div>
        ) : (
          <a href="/">
            <span className="Signin">로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
