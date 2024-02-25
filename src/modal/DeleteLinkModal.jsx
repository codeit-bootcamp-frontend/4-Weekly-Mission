import ModalLayout from "./ModalLayout";
import { MODALS } from "./modals";
import styles from "./DeleteLinkModal.module.css";

function DeleteLinkModal({ url, isModalClicked, onToggleModal }) {
  const { deleteLink } = MODALS;

  const onClickCloseButton = (e) => {
    e.stopPropagation();
    onToggleModal(deleteLink.type);
  };

  return (
    <ModalLayout
      title={deleteLink.title}
      isModalClicked={isModalClicked.deleteLink}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.url}>{url}</div>
      <button className={styles.button}>{deleteLink.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteLinkModal;
