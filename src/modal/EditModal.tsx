import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "../constants/modalConstans";
import styles from "./EditModal.module.css";

interface EditModalProps extends ModalBaseProps {
  placeholder: string,
}

function EditModal({ isOpenModal, closeModal, placeholder }: EditModalProps) {

  const { edit } = MODAL_TYPE;

  return (
    <ModalLayout
      title={edit.title}
      isOpenModal={isOpenModal}
      closeModal={closeModal}
    >
      <input className={styles.inputText} type="text" placeholder={placeholder} />
      <button className={styles.submitButton}>{edit.buttonName}</button>
    </ModalLayout>
  );
}


export default EditModal;