import { useModal } from "hooks/useModal";
import styles from "./styles.module.css";
import { AddModal, ModalPortal } from "components";

export function FolderCategory({ folders, selectedId, onSelectedFolder }) {
  const { openModal, modalRef, handleModalClose, handleModalOpen } = useModal();

  const handleFolderSelectClick = (e) => {
    onSelectedFolder({ name: e.target.textContent, id: e.target.id });
  };

  const handleFolderAddClick = (e) => {
    handleModalOpen();
  };

  return (
    <>
      <ModalPortal>
        <AddModal
          ref={modalRef}
          openModal={openModal}
          handleModalClose={handleModalClose}
        />
      </ModalPortal>
      <div className={styles.container}>
        <div className={styles.tags}>
          <span
            className={`${styles.tag} ${!selectedId ? styles.selected : ""}`}
            onClick={handleFolderSelectClick}
          >
            전체
          </span>
          {folders.map((folder) => (
            <span
              className={`${styles.tag} ${
                folder.id == selectedId ? styles.selected : ""
              }`}
              key={folder.id}
              id={folder.id}
              onClick={handleFolderSelectClick}
            >
              {folder.name}
            </span>
          ))}
        </div>
        <span className={styles.folderAddBtn} onClick={handleFolderAddClick}>
          폴더 추가+
        </span>
      </div>
    </>
  );
}
