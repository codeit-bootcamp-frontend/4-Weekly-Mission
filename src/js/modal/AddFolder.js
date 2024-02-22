import React from "react";
import "../../css/AddFolder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function AddFolder({ setAddFolderModalOpen }) {
  const closeAddFolderModal = () => {
    setAddFolderModalOpen(false);
  };
  return (
    <>
      <div className="AddFolderBackground">
        <div className="AddFolderContainer">
          <div className="AddFolderBox">
            <FontAwesomeIcon
              icon={faXmark}
              className="AddFolderX"
              onClick={closeAddFolderModal}
            />
            <div className="AddFolderTitle">폴더 추가</div>
            <input className="AddFolderInput" placeholder="내용 입력" />
            <button className="AddFolderButton">추가하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFolder;
