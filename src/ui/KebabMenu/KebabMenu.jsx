import { useState } from "react";
import "./KebabMenu.css";
import { AddToFolder } from "feature/Modals/AddToFolder/AddToFolder";
import { DeleteLink } from "feature/Modals/DeleteLink/DeleteLink";

export function KebabMenu({ deleteURL }) {
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
        <DeleteLink
          isOpenModal={showDeleteModal}
          handleModalClose={handleModalClose}
          deleteURL={deleteURL}
        />
      )}
      {addToFolderModal && (
        <AddToFolder
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
