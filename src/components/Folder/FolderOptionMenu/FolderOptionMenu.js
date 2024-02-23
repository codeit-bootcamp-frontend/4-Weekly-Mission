import { ShareFolderModal } from "../../ShareFolderModal/ShareFolderModal";
import "./FolderOptionMenu.css";

export const FolderOptionMenu = ({
  openModal,
  modalRef,
  handleModalClose,
  handleModalOpen,
}) => {
  return (
    <div className="folderOption-options">
      <div className="folderOption-option">
        <div className="shareIcon"></div>
        <button onClick={handleModalOpen}>공유</button>
        {openModal && (
          <ShareFolderModal
            openModal={openModal}
            modalRef={modalRef}
            handleModalClose={handleModalClose}
          />
        )}
      </div>
      <div className="folderOption-option">
        <div className="nameChangeIcon"></div>
        <button>이름 변경</button>
      </div>
      <div className="folderOption-option">
        <div className="deleteIcon"></div>
        <button>삭제</button>
      </div>
    </div>
  );
};
