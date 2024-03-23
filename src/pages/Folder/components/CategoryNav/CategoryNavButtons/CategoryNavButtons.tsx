import { useState } from "react";
import { DELETE_ICON, RENAME_ICON, SHARED_ICON } from "./constant";
import { SharedFolder } from "../../../../../components/Modals/SharedFolder/SharedFolder";
import { RenameModal } from "../../../../../components/Modals/RenameModal/RenameModal";
import { DeleteFolder } from "../../../../../components/Modals/DeleteFolder/DeleteFolder";

interface Props {
  selectFolder: string;
}

export function CategoryNavButtons({ selectFolder }: Props) {
  const [sharedModal, setSharedModal] = useState(false);
  const [renameModal, setRenameModal] = useState(false);
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);

  const handleSharedModal = () => {
    setSharedModal(true);
  };

  const handleCloseModal = () => {
    setSharedModal(false);
    setRenameModal(false);
    setDeleteFolderModal(false);
  };

  const handleRenameModal = () => {
    setRenameModal(true);
  };

  const handleDeleteFolderModal = () => {
    setDeleteFolderModal(true);
  };

  return (
    <>
      {sharedModal && (
        <SharedFolder
          selectFolder={selectFolder}
          isOpenModal={sharedModal}
          handleModalClose={handleCloseModal}
        />
      )}
      {renameModal && (
        <RenameModal
          isOpenModal={renameModal}
          handleModalClose={handleCloseModal}
        />
      )}
      {deleteFolderModal && (
        <DeleteFolder
          isOpenModal={deleteFolderModal}
          handleModalClose={handleCloseModal}
          selectFolder={selectFolder}
        />
      )}
      <button className="category-nav-button" onClick={handleSharedModal}>
        <img src={SHARED_ICON} alt="공유하기를 나타내는 아이콘" />
        <p>공유</p>
      </button>
      <button className="category-nav-button" onClick={handleRenameModal}>
        <img src={RENAME_ICON} alt="이름 변경하기를 나타내는 아이콘" />
        <p>이름 변경</p>
      </button>
      <button className="category-nav-button" onClick={handleDeleteFolderModal}>
        <img src={DELETE_ICON} alt="삭제하기를 나타내는 아이콘" />
        <p>삭제</p>
      </button>
    </>
  );
}
