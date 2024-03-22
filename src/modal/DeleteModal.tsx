import { MODAL_TYPE } from "./modalType";
import ModalLayout from "./ModalLayout";
import styles from "./DeleteModal.module.css";

function DeleteModal({ isOpenModal, closeModal }) {

  const { deleteFolder } = MODAL_TYPE;

  return (
    <ModalLayout
      title={deleteFolder.title}
      isOpen={isOpenModal}
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