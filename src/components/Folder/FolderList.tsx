import React, { ReactNode, useState } from "react";
import ModalEdit from "./Modal/ModalEdit/ModalEdit.tsx";

interface FolderListProps {
  activeButton: string;
  handleButtonClick: (button: string) => void;
  renderedButtons: ReactNode;
}

function FolderList({
  activeButton,
  handleButtonClick,
  renderedButtons,
}: FolderListProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="Folder-lists-container">
      <div className="Folder-lists">
        <button
          className={activeButton === "전체" ? "active" : ""}
          onClick={() => handleButtonClick("전체")}
        >
          전체
        </button>
        {renderedButtons}
      </div>
      <div className="Folder-add">
        <button className="Folder-add-text" onClick={handleOpenModal}>
          폴더 추가
        </button>
        {isEditModalOpen && (
          <ModalEdit
            setIsEditModalOpen={setIsEditModalOpen}
            text="폴더 추가"
            buttonText="추가하기"
          />
        )}
        <img
          className="Folder-add-image"
          src="images/add.svg"
          alt="폴더 추가 이미지"
        />
      </div>
    </div>
  );
}

export default FolderList;
