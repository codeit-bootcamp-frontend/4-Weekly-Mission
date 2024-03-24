import React from "react";
import "../style/folderList.css";
import addImg from "../assets/add.png";
import { useEffect, useState } from "react";
import fetchData from "../api/FetchData";
import shareImg from "../assets/share.png";
import penImg from "../assets/pen.png";
import deleteImg from "../assets/delete.png";
import FolderCard from "./folderCard";
function FolderList() {
  const [folderList, setFolderList] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const [linkToFetch, setLinkToFetch] = useState("users/1/links");
  useEffect(() => {
    const fetchFolderList = async () => {
      try {
        const data = await fetchData("users/1/folders");
        if (data) {
          setFolderList(data);
        }
      } catch (e) {
        alert("error", e);
      }
    };
    fetchFolderList();
  }, []);

  const handleFolderClick = (folderName, folderId) => {
    setSelectedFolder(folderName);
    const folderIdToSend = folderName === "전체" ? null : folderId;
    const linkToFetch = folderIdToSend
      ? `users/1/links?folderId=${folderIdToSend}`
      : "users/1/links";
    setLinkToFetch(linkToFetch);
  };
  return (
    <div>
      <div className="sorting-container">
        <div className="sortingBtn-container">
          <button
            className={`sortingBtn ${
              selectedFolder === "전체" ? "selected" : ""
            }`}
            onClick={() => handleFolderClick("전체", null)}
          >
            전체
          </button>
          {folderList &&
            folderList.data.map((folder, id) => (
              <button
                key={id}
                className={`sortingBtn ${
                  selectedFolder === folder.name ? "selected" : ""
                }`}
                onClick={() => handleFolderClick(folder.name, folder.id)}
              >
                {folder.name}
              </button>
            ))}
        </div>
        <button className="addFolder">
          <p className="addFolderText">폴더 추가</p>
          <img src={addImg} alt="addFolder" />
        </button>
      </div>
      {selectedFolder !== "전체" ? (
        <div className="folderOption-container">
          <p className="folderName">{selectedFolder}</p>
          <div className="folderOption">
            <div>
              <img src={shareImg} alt="shareImg" />
              <p>공유</p>
            </div>
            <div>
              <img src={penImg} alt="penImg" />
              <p>이름 변경</p>
            </div>
            <div>
              <img src={deleteImg} alt="deleteImg" />
              <p>삭제</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="folderOption-container">
          <p className="folderName">{selectedFolder}</p>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderCard linkToFetch={linkToFetch} />
      </div>
    </div>
  );
}
export default FolderList;
