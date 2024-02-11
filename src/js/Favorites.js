import React, { useState, useEffect } from "react";
import "../css/Favorites.css";

function Favorites() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          setProfile(data);
        } else {
          setProfile();
        }
      } catch (error) {
        console.error("Error:", error);
        setProfile();
      }
    };

    fetchData();
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
                src={profile.profileImageSource} // 프로필 이미지가 없는 경우 기본 이미지 사용
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
      <div className="FavoritesProfile">
        <img
          src="./images/하츄핑.png"
          alt="프로필"
          className="FavoritesProfileImg"
        ></img>
        <div className="FavoritesProfileName">@서리핑</div>
        <div className="FavoritesTitle">⭐즐겨찾기</div>
      </div>
      <div className="FavoritesContents">
        <input
          className="FavoritesInput"
          placeholder="🔎 링크를 검색해 보세요."
        ></input>
        <div className="FavoritesContent"></div>
      </div>
    </>
  );
}

export default Favorites;
