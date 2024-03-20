import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./DeleteFolderModal.module.css";

function DeleteFolderModal({ folderName, isModalClicked, handleModalClick }) {
  const { deleteFolder } = MODALS;

  const onClickCloseButton = (e) => {
    e.stopPropagation();
    handleModalClick(deleteFolder.type);
  };

  return (
    <ModalLayout
      title={deleteFolder.title}
      isModalClicked={isModalClicked.deleteFolder}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.folderName}>{folderName}</div>
      <button className={styles.button}>{deleteFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteFolderModal;
