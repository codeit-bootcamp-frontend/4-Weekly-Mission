import { FolderOptionMenu } from "../FolderOptionMenu";
import "./FolderOption.css";

export const FolderOption = ({
  folderName,
  openModal,
  modalRef,
  handleModalClose,
  handleModalOpen,
}) => {
  return (
    <div className="folderOption">
      <div className="folderOption-folderName">{folderName}</div>
      {folderName === "전체" ? (
        <></>
      ) : (
        <FolderOptionMenu
          openModal={openModal}
          modalRef={modalRef}
          handleModalClose={handleModalClose}
          handleModalOpen={handleModalOpen}
        />
      )}
    </div>
  );
};
