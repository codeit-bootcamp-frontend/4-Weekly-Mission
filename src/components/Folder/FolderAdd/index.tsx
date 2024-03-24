import { Fragment } from "react";
import { useModal } from "../../../hooks/useModal";
import { AddFolderModal } from "../../Modal";
import "./FolderAdd.css";

export const FolderAdd = () => {
  const {
    openModal: AddOpenModal,
    modalRef: AddModalRef,
    handleModalClose: AddHandleModalClose,
    handleModalOpen: AddHandleModalOpen,
  } = useModal();

  return (
    <Fragment>
      <button className="folderAdd" onClick={AddHandleModalOpen}>
        <div>폴더 추가</div>
        <div className="folderAdd-add-icon"></div>
      </button>
      {AddOpenModal && (
        <AddFolderModal
          openModal={AddOpenModal}
          modalRef={AddModalRef}
          handleModalClose={AddHandleModalClose}
        />
      )}
    </Fragment>
  );
};
