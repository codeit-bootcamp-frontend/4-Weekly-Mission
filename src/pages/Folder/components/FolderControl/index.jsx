import styles from "./styles.module.css";
import deleteImg from "assets/delete.png";
import penImg from "assets/pen.png";
import shareImg from "assets/share.png";
import { useModal } from "hooks/useModal";
import DeleteModal from "components/DeleteModal";

export function FolderControl({ folderName }) {
  const { openModal, modalRef, handleModalClose, handleModalOpen } = useModal();

  const handleDeleteClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <DeleteModal
        ref={modalRef}
        openModal={openModal}
        handleModalClose={handleModalClose}
        title="폴더 삭제"
        description={folderName}
      />
      <div className={styles.container}>
        <div className={styles.folderName}>{folderName}</div>
        {folderName === "전체" ? (
          <></>
        ) : (
          <div className={styles.controlMenu}>
            <div className={styles.controlMenuItem}>
              <img src={shareImg} alt="shareIconImage" />
              <span>공유</span>
            </div>
            <div className={styles.controlMenuItem}>
              <img src={penImg} alt="penIconImage" />
              <span>이름 변경</span>
            </div>
            <button
              className={styles.controlMenuItem}
              onClick={handleDeleteClick}
            >
              <img src={deleteImg} alt="deleteIconImage" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
