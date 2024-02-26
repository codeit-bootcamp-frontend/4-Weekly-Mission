import { useState } from "react";
import "./KebabMenu.css";
import { DeleteFolderModal } from "feature/DeleteFolderModal/DeleteFolderModal";
import { AddFolderModal } from "feature/AddFolderModal/AddFolderModal";

export function KebabMenu() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [addToFolderModal, setAddToFolderModal] = useState(false);

  const handleShowDeleteModal = () => {
    setDeleteModal(true);
  };

  const handleShowAddToFolderModal = () => {
    setAddToFolderModal(true);
  };

  return (
    <div className="CardContent-kebab-menu">
      {deleteModal && <DeleteFolderModal />}
      {addToFolderModal && <AddFolderModal />}
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
