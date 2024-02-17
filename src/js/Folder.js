import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../css/Folder.css";

function Folder() {
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
        <div className="FolderContents"></div>
      </div>
      <Footer />
    </>
  );
}

export default Folder;
