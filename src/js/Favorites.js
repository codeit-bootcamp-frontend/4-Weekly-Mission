import React, { useState, useEffect } from "react";
import { fetchFolderData } from "./Service/ApiService";
import "../css/Favorites.css";
import Nav from "./Nav";
import Footer from "./Footer";

function Favorites() {
  const [folder, setFolder] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFolderData();
        setFolder(data);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    loadData();
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
    }
    if (diff < hour) {
      return `${Math.floor(diff / minute)} minutes ago`;
    }
    if (diff < day) {
      return `${Math.floor(diff / hour)} hours ago`;
    }
    if (diff < month) {
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
    // getMonth()는 0부터 시작하므로 1을 더함
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
}

export default Favorites;
