import React, { useState, useEffect } from "react";

function Nav() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await response.json();
        if (data) {
          setProfile(data);
        } else {
          setProfile();
        }
      } catch (error) {
        console.error("User Error:", error);
        setProfile();
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          {profile ? (
            <div className="FavoritesProfileContent">
              <img
                src={profile.profileImageSource}
                alt="프로필 이미지"
                className="FavoritesProfileImgSrc"
              />
              <a className="FavoritesProfileEmail" href="profile.html">
                <span>{profile.email}</span>
              </a>
            </div>
          ) : (
            <a className="cta cta-short" href="signin.html">
              <span>로그인</span>
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
