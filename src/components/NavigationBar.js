import React, { useState, useEffect } from "react";
import "../styles/NavigationBar.css";
import { Profile } from "./Profile";

function NavigationBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/user"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href="/">
          <img
            className="NavigationBar-logo"
            src="/images/linkbrary.svg"
            alt="로고 이미지"
          />
        </a>
        {userData ? (
          <Profile {...userData} />
        ) : (
          <button className="NavigationBar-signin">로그인</button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
