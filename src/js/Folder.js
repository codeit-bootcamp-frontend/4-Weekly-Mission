import React, { useState, useEffect } from "react";
import { fetchFolderCardData, fetchLinks } from "./Service/ApiService";
import Nav from "./Nav";
import Footer from "./Footer";
import "../css/Folder.css";

function Folder() {
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  // 폴더 목록 불러오기 (전체, 즐겨찾기, 코딩 팁 ...etc)
  useEffect(() => {
    const loadFolders = async () => {
      try {
        const folderData = await fetchFolderCardData();
        setFolders(folderData.data); // folderData가 { data: [폴더 목록] } 구조를 가짐
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    loadFolders();
  }, []);

  // 선택된 폴더의 링크 데이터 불러오기
  const loadLinksForFolder = async (folderId) => {
    try {
      const linksData = await fetchLinks(folderId);
      setSelectedLinks(linksData.data); // linksData가 { data: [링크 목록] } 구조를 가짐
      setSelectedFolderId(folderId);
      console.log("button click");
      console.log(linksData);
    } catch (error) {
      console.error("Error fetching links:", error);
      setSelectedLinks([]); // 에러 발생 시 링크 목록 비우기
    }
  };

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
      <div className="FolderInputBox">
        <input
          className="FolderAddInput"
          placeholder="🔗 링크를 추가해 보세요"
        />
        <button className="FolderAddButton">추가하기</button>
      </div>
      <div className="FolderContentBox">
        <input
          className="FolderSearchInput"
          placeholder="🔎 링크를 검색해 보세요."
        />
        <div className="FolderList">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => loadLinksForFolder(folder.id)}
              // 선택된 폴더 버튼 배경색만 바꾸기 위해
              className={`FolderListButton ${
                selectedFolderId === folder.id ? "selected" : ""
              }`}
            >
              {folder.name}
            </button>
          ))}
          <button className="FolderAddSmallButton">폴더 추가 +</button>
        </div>
        <div className="FolderUsefulTitle">유용한 글</div>
        <div className="FolderContents">
          {selectedLinks.length === 0 ? (
            <div className="FolderNoCards">저장된 링크가 없습니다.</div>
          ) : (
            selectedLinks.map((link) => (
              // <div key={link.id} className="FolderCards">
              //   <a href={link.url} target="_blank" rel="noopener noreferrer">
              //     {link.title || link.url}
              //   </a>
              // </div>
              <div key={link.id} className="FolderLinkItem">
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
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Folder;
