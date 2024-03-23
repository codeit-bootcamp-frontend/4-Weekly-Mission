import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "./modalType";
import styles from "./EditModal.module.css";

interface Props {
  isOpenModal: boolean,
  closeModal: () => void,
  placeholder: string,
}

function EditModal({ isOpenModal, closeModal, placeholder }: Props) {

  const { edit } = MODAL_TYPE;

  return (
    <ModalLayout
      title={edit.title}
      isOpen={isOpenModal}
      closeModal={closeModal}
    >
      <input className={styles.inputText} type="text" placeholder={placeholder} />
      <button className={styles.submitButton}>{edit.buttonName}</button>
    </ModalLayout>
  );
}


export default EditModal;