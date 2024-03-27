import { MODAL_TYPE } from "../constants/modalConstans";
import ModalLayout from "./ModalLayout";
import styles from "./DeleteModal.module.css";

function DeleteModal({ isOpenModal, closeModal }: ModalBaseProps) {

  const { deleteFolder } = MODAL_TYPE;

  return (
    <ModalLayout
      title={deleteFolder.title}
      isOpenModal={isOpenModal}
      closeModal={closeModal}
    >
      <div className={styles.folderName}>폴더명</div>
      <button className={styles.deleteButton}>
        {deleteFolder.buttonName}
      </button>
    </ModalLayout>
  );
}

export default DeleteModal;