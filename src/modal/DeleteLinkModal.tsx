import { MODAL_TYPE } from "../constants/modalConstans";
import ModalLayout from "./ModalLayout";
import styles from "./DeleteModal.module.css";

interface DeleteLinkModalProp extends ModalBaseProps {
  url: string,
}

function DeleteLinkModal({ isOpenModal, closeModal, url }: DeleteLinkModalProp) {

  const { deleteLink } = MODAL_TYPE;

  return (
    <ModalLayout
      title={deleteLink.title}
      isOpenModal={isOpenModal}
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