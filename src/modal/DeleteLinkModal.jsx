import { MODAL_TYPE } from "./modalType";
import ModalLayout from "./ModalLayout";
import styles from "./DeleteModal.module.css";

function DeleteLinkModal({ isOpenModal, closeModal, url }) {

  const { deleteLink } = MODAL_TYPE;

  return (
    <ModalLayout
      title={deleteLink.title}
      isOpen={isOpenModal}
      closeModal={closeModal}
    >
      <div className={styles.folderName}>{url}</div>
      <button className={styles.deleteButton}>
        {deleteLink.buttonName}
      </button>
    </ModalLayout>
  );
}

export default DeleteLinkModal;