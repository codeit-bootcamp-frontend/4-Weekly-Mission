import React, { useState } from "react";
import SearchBar from "./SearchBar";
import addImg from "../assets/add.svg";
import shareIcon from "../assets/share.svg";
import penIcon from "../assets/pen.svg";
import deleteIcon from "../assets/delete.svg";
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
        <div className="FolderNameBar">
          <span>{folderName}</span>
          <div className="OptionIcon">
            <img src={shareIcon} alt="공유 아이콘" />
            <span>공유</span>
            <img src={penIcon} alt="이름 변경 아이콘" />
            <span>이름 변경</span>
            <img src={deleteIcon} alt="삭제 아이콘" />
            <span>삭제</span>
          </div>
        </div>
      </div>
    </div>
  );
}
