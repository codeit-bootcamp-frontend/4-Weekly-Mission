import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./DeleteFolderModal.module.css";

function DeleteFolderModal({ isModalClicked, onToggleModal }) {
  const { deleteFolder } = MODALS;
  console.log(url);

  const onClickCloseButton = (e) => {
    e.stopPropagation();
    onToggleModal(deleteFolder.type);
  };

  return (
    <ModalLayout
      title={deleteFolder.title}
      isModalClicked={isModalClicked.deleteFolder}
      onClickCloseButton={onClickCloseButton}
    >
      <button className={styles.button}>{deleteFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteFolderModal;
