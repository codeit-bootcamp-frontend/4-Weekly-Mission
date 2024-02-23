import ModalLayout from "./ModalLayout";
import { MODALS } from "./modals";
import styles from "./AddModal.module.css";

function AddModal({ isModalClicked, handleModalClick }) {
  const { add } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(add.type);
  };

  return (
    <ModalLayout
      title={add.title}
      isModalClicked={isModalClicked.add}
      onClickCloseButton={onClickCloseButton}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={add.placeholder}
      />
      <button className={styles.button}>{add.buttonName}</button>
    </ModalLayout>
  );
}

export default AddModal;
