import { useState } from "react";
import "./KebabMenu.css";
import { DeleteFolderContent } from "feature/DeleteFolderModal/DeleteFolderModal";
import { AddFolderContent } from "feature/AddFolderContent/AddFolderContent";

export function KebabMenu() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addToFolderModal, setAddToFolderModal] = useState(false);

  const handleModalClose = (e) => {
    e.preventDefault();
    setShowDeleteModal(false);
    setAddToFolderModal(false);
  };

  const handleShowDeleteModal = (e) => {
    e.preventDefault();
    setShowDeleteModal(true);
  };

  const handleShowAddToFolderModal = (e) => {
    e.preventDefault();
    setAddToFolderModal(true);
  };

  return (
    <div className="CardContent-kebab-menu">
      {showDeleteModal && (
        <DeleteFolderContent
          isOpenModal={showDeleteModal}
          handleModalClose={handleModalClose}
        />
      )}
      {addToFolderModal && (
        <AddFolderContent
          isOpenModal={addToFolderModal}
          handleModalClose={handleModalClose}
        />
      )}
      <button
        type="button"
        className="CardContent-kebab-menu-delete"
        onClick={handleShowDeleteModal}
      >
        삭제하기
      </button>
      <button
        type="button"
        className="CardContent-kebab-menu-addFolder"
        onClick={handleShowAddToFolderModal}
      >
        폴더에 추가
      </button>
    </div>
  );
}
