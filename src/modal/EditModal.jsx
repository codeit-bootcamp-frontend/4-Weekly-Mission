import ModalLayout from "./ModalLayout";
import { MODALS } from "./modals";
import styles from "./EditModal.module.css";

function EditModal({ isModalClicked, handleModalClick }) {
  const { edit } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(edit.type);
  };

  return (
    <ModalLayout
      title={edit.title}
      isModalClicked={isModalClicked.edit}
      onClickCloseButton={onClickCloseButton}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={edit.placeholder}
      />
      <button className={styles.button}>{edit.buttonName}</button>
    </ModalLayout>
  );
}

export default EditModal;
