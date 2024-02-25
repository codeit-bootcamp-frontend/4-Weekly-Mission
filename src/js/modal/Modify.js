import React from "react";
import "../../css/AddFolder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modify({ setEditFolderModalOpen }) {
  const closeModal = () => {
    setEditFolderModalOpen(false);
  };

  return (
    <>
      <div className="AddFolderBackground" onClick={closeModal}>
        <div
          className="AddFolderContainer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="AddFolderBox">
            <FontAwesomeIcon
              icon={faXmark}
              className="AddFolderX"
              onClick={closeModal}
            />
            <div className="AddFolderTitle">폴더 이름 변경</div>
            <input className="AddFolderInput" placeholder="내용 입력" />
            <button className="AddFolderButton">변경하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modify;
