import { useState } from "react";
import ModalEdit from "./Modal/ModalEdit/ModalEdit";

function FolderList({ activeButton, handleButtonClick, renderedButtons }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
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
        {isModalOpen && (
          <ModalEdit
            setIsModalOpen={setIsModalOpen}
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
