import {
  ShareFolderModal,
  EditFolderNameModal,
  DeleteFolderModal,
} from "../../Modal";
import { useModal } from "../../../hooks/useModal";
import "./FolderOptionMenu.css";

interface Props {
  folderName: string;
}

export const FolderOptionMenu = ({ folderName }: Props) => {
  const {
    openModal: shareOpenModal,
    modalRef: shareModalRef,
    handleModalClose: shareHandleModalClose,
    handleModalOpen: shareHandleModalOpen,
  } = useModal();

  const {
    openModal: editOpenModal,
    modalRef: editModalRef,
    handleModalClose: editHandleModalClose,
    handleModalOpen: editHandleModalOpen,
  } = useModal();

  const {
    openModal: deleteOpenModal,
    modalRef: deleteModalRef,
    handleModalClose: deleteHandleModalClose,
    handleModalOpen: deleteHandleModalOpen,
  } = useModal();

  return (
    <div className="folderOption-options">
      <div className="folderOption-option">
        <div className="shareIcon"></div>
        <button onClick={shareHandleModalOpen}>공유</button>
        {shareOpenModal && (
          <ShareFolderModal
            folderName={folderName}
            openModal={shareOpenModal}
            modalRef={shareModalRef}
            handleModalClose={shareHandleModalClose}
          />
        )}
      </div>
      <div className="folderOption-option">
        <div className="nameChangeIcon"></div>
        <button onClick={editHandleModalOpen}>이름 변경</button>
        {editOpenModal && (
          <EditFolderNameModal
            openModal={editOpenModal}
            modalRef={editModalRef}
            handleModalClose={editHandleModalClose}
          />
        )}
      </div>
      <div className="folderOption-option">
        <div className="deleteIcon"></div>
        <button onClick={deleteHandleModalOpen}>삭제</button>
        {deleteOpenModal && (
          <DeleteFolderModal
            folderName={folderName}
            openModal={deleteOpenModal}
            modalRef={deleteModalRef}
            handleModalClose={deleteHandleModalClose}
          />
        )}
      </div>
    </div>
  );
};
