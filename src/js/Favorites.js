import React, { useState, useEffect } from "react";
import "../css/Favorites.css";

function Favorites() {
  const [profile, setProfile] = useState();
  const [folder, setFolder] = useState(null);

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

    const fetchFolderData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await response.json();
        if (data) {
          setFolder(data.folder);
        } else {
          setFolder();
        }
      } catch (error) {
        console.error("Folder Error:", error);
        setFolder();
      }
    };

    fetchUserData();
    fetchFolderData();
  }, []);

  function timeAgo(createdAt) {
    const createdAtDate = new Date(createdAt);
    const now = new Date();
    const diff = Math.floor((now - createdAtDate) / 1000);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    if (diff < 2 * minute) {
      return "1 minute ago";
    } else if (diff < hour) {
      return `${Math.floor(diff / minute)} minutes ago`;
    } else if (diff < day) {
      return `${Math.floor(diff / hour)} hours ago`;
    } else if (diff < month) {
      return `${Math.floor(diff / day)} days ago`;
    } else if (diff < year) {
      return `${Math.floor(diff / month)} months ago`;
    } else {
      const years = Math.floor(diff / year);
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

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
      {folder && (
        <div className="FavoritesProfile">
          <img
            src={folder.owner.profileImageSource}
            alt="프로필"
            className="FavoritesProfileImg"
          ></img>
          <div className="FavoritesProfileName">@{folder.owner.name}</div>
          <div className="FavoritesTitle">{folder.name}</div>
        </div>
      )}
      <div className="FavoritesInputBox">
        <input
          className="FavoritesInput"
          placeholder="🔎 링크를 검색해 보세요."
        ></input>
      </div>
      <div className="FavoritesContents">
        <div className="FavoritesContent">
          {folder?.links?.map((link) => (
            <div key={link.id} className="FavoritesLinkItem">
              <a href={link.url} target="_blank" className="FavoritesGo">
                <img
                  src={link.imageSource}
                  className="FavoritesLinkImg"
                  alt="이미지 카드 사진"
                ></img>
                <div className="FavoritesLinkDesc">
                  <div className="FavoritesTimeDiff">
                    {timeAgo(link.createdAt)}
                  </div>
                  <div className="FavoritesDesc">{link.description}</div>
                  <div className="FavoritesLinkDate">
                    {formatDate(link.createdAt)}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div class="footer-box">
          <span class="copyright">©codeit - 2023</span>
          <div class="footer-links">
            <a class="footer-link" href="privacy.html">
              Privacy Policy
            </a>
            <a class="footer-link" href="faq.html">
              FAQ
            </a>
          </div>
          <div class="sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/facebook.svg"
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/twitter.svg"
                alt="twitter 홈페이지로 연결된 twitter 로고"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/youtube.svg"
                alt="youtube 홈페이지로 연결된 youtube 로고"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/instagram.svg"
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Favorites;
