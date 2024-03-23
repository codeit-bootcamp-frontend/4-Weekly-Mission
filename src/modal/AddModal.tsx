import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "./modalType";
import styles from "./AddModal.module.css";

interface Props {
  isOpenModal: boolean,
  closeModal: () => void,
}

function AddModal({ isOpenModal, closeModal }: Props) {

  const { add } = MODAL_TYPE;

  return (
    <ModalLayout
      title={add.title}
      isOpen={isOpenModal}
      closeModal={closeModal}
    >
      <input className={styles.inputText} type="text" placeholder={add.placeholder} />
      <button className={styles.submitButton}>{add.buttonName}</button>
    </ModalLayout>
  );
}


export default AddModal;