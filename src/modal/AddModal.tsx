import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "../constants/modalConstans";
import styles from "./AddModal.module.css";

function AddModal({ isOpenModal, closeModal }: ModalBaseProps) {

  const { add } = MODAL_TYPE;

  return (
    <ModalLayout
      title={add.title}
      isOpenModal={isOpenModal}
      closeModal={closeModal}
    >
      <input className={styles.inputText} type="text" placeholder={add.placeholder} />
      <button className={styles.submitButton}>{add.buttonName}</button>
    </ModalLayout>
  );
}


export default AddModal;