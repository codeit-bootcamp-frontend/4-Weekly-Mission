import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./AddFolderModal.module.css";

function AddFolderModal({ isModalClicked, handleModalClick }) {
  const { addFolder } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(addFolder.type);
  };

  return (
    <ModalLayout
      title={addFolder.title}
      isModalClicked={isModalClicked.add}
      onClickCloseButton={onClickCloseButton}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={addFolder.placeholder}
      />
      <button className={styles.button}>{addFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default AddFolderModal;
