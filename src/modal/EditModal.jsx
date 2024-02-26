import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "./modalType";
import styles from "./EditModal.module.css";

function EditModal({ isOpenModal, closeModal, placeholder }) {

  const { edit } = MODAL_TYPE;

  return (
    <ModalLayout
      title={edit.title}
      isOpen={isOpenModal}
      closeModal={closeModal}
      buttonName={edit.buttonName}
    >
      <input className={styles.inputText} type="text" placeholder={placeholder} />
      <button className={styles.submitButton}>{edit.buttonName}</button>
    </ModalLayout>
  );
}


export default EditModal;