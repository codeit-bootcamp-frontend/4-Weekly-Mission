import { useState } from "react";
import "./KebabMenu.css";
import { AddToFolder } from "components/Modals/AddToFolder/AddToFolder";
import { DeleteLink } from "components/Modals/DeleteLink/DeleteLink";

export function KebabMenu({ selectURL, data }) {
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
          deleteURL={selectURL}
        />
      )}
      {addToFolderModal && (
        <AddToFolder
          isOpenModal={addToFolderModal}
          handleModalClose={handleModalClose}
          linkURL={selectURL}
          data={data}
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
