import React from "react";
import "../../css/AddFolder.css";

function AddFolder() {
  return (
    <>
      <div className="AddFolderContainer">
        <div className="AddFolderBox">
          <div className="AddFolderTitle">폴더 추가</div>
          <input className="AddFolderInput" placeholder="내용 입력" />
          <button className="AdddFolderButton">추가하기</button>
        </div>
      </div>
    </>
  );
}

export default AddFolder;
