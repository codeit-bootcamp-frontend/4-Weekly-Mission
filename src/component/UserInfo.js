import React, { useState, useEffect } from "react";
import "../style/header.css";

function UserInfo() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const answer = await response.json();
        setUserData(answer);
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, []);

  if (!userData) {
    return <button className="login">로그인</button>;
  }

  return (
    <div className="profile">
      <img
        className="user-image"
        src={userData.profileImageSource}
        alt="Profile"
      />
      <p className="user-email">{userData.email}</p>
    </div>
  );
}

export default UserInfo;
