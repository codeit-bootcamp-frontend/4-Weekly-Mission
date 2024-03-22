import React, { useState } from "react";
import "./SelectedOption.css";
import ModalEdit from "../Modal/ModalEdit/ModalEdit.tsx";
import ModalDelete from "../Modal/ModalDelete/ModalDelete.tsx";
import ModalShare from "../Modal/ModalShare/ModalShare.tsx";

interface SelectedOptionProps {
  selectedFolder: string;
  activeButton: string;
}
function SelectedOption({ selectedFolder, activeButton }: SelectedOptionProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  return (
    <div className="Selected-folder">
      <span className="Selected-folder-name">{selectedFolder}</span>
      {activeButton !== "전체" && (
        <div className="Selected-option">
          <button
            className="Selected-option-content"
            onClick={handleOpenShareModal}
          >
            <img src="images/share.svg" alt="공유 이미지" />
            <p>공유</p>
          </button>
          {isShareModalOpen && (
            <ModalShare setIsShareModalOpen={setIsShareModalOpen} />
          )}
          <button
            className="Selected-option-content"
            onClick={handleOpenEditModal}
          >
            <img src="images/pen.svg" alt="이름 변경 이미지" />
            <p>이름 변경</p>
          </button>
          {isEditModalOpen && (
            <ModalEdit
              setIsEditModalOpen={setIsEditModalOpen}
              text="폴더 이름 변경"
              buttonText="변경하기"
            />
          )}
          <button
            className="Selected-option-content"
            onClick={handleOpenDeleteModal}
          >
            <img src="images/delete.svg" alt="삭제 이미지" />
            <p>삭제</p>
          </button>
          {isDeleteModalOpen && (
            <ModalDelete
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              text="폴더 삭제"
              buttonText="삭제하기"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default SelectedOption;
