import React, { useState } from "react";
import SearchBar from "./SearchBar";
import addImg from "../assets/add.svg";
import "./FolderSection.css";

export default function FolderSection() {
  const [folderName, setFolderName] = useState("");
  const folderNameClick = (e) => {
    setFolderName(e.target.textContent);
  };
  return (
    <div className="FolderSection">
      <div className="FolderSection-Frame">
        <SearchBar />
        <div className="FolderBtnList">
          <div className="FolderBtn">
            <button onClick={folderNameClick}>전체</button>
            <button onClick={folderNameClick}>⭐️ 즐겨찾기</button>
            <button onClick={folderNameClick}>코딩 팁</button>
            <button onClick={folderNameClick}>채용 사이트</button>
            <button onClick={folderNameClick}>유용한 글</button>
            <button onClick={folderNameClick}>나만의 장소</button>
          </div>
          <div className="AddFolder">
            <span>폴더 추가</span>
            <img src={addImg} alt="폴더 추가 버튼" />
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
