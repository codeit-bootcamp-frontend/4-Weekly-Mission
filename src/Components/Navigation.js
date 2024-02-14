import logo from "../img/logo.png";
import React, { useState, useEffect } from "react";

// const Navigation = () => {
//   return (
//     <nav className="Navigation">
//       <img className="logo" src={logo} alt="Linkbrary 로고" />
//     </nav>
//   );
// };

// export default Navigation;

const Navigation = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // API 요청을 보내는 함수
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData(); // 컴포넌트가 마운트될 때 API 요청 보내기
  }, []);

  if (!userData) {
    return null;
  }

  const userLoginData = () => {
    return userData ? (
      <>
        <img src={userData.profileImageSource} alt="프로칠 이미지" />
        <p>{userData.email}</p>
      </>
    ) : (
      // userData가 없는 경우 로그인 버튼 보여주기
      <button>로그인</button>
    );
  };

  // userData가 존재하는 경우에만 프로필을 렌더링
  return (
    <nav className="Navigation">
      <img className="logo" src={logo} alt="Linkbrary 로고" />
      <div className="profile">{userLoginData()}</div>
    </nav>
  );
};

export default Navigation;
