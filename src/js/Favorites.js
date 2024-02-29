import React, { useState, useEffect } from "react";
import { fetchFolderData } from "./Service/ApiService";
import { getTimeAgo } from "./utils/getTimeAgo";
import { formatDate } from "./utils/formatDate";
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
              <a
                href={link.url}
                target="_blank"
                className="FavoritesGo"
                rel="noreferrer"
              >
                <img
                  src={link.imageSource}
                  className="FavoritesLinkImg"
                  alt="이미지 카드 사진"
                ></img>
                <div className="FavoritesLinkDesc">
                  <div className="FavoritesTimeDiff">
                    {getTimeAgo(link.createdAt)}
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
