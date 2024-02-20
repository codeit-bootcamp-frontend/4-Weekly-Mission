import Modal from "components/Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

const DeleteModal = forwardRef(
  ({ openModal, handleModalClose, title, description }, ref) => {
    return (
      <Modal modalRef={ref} openModal={openModal}>
        <div className={styles.container}>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            x
          </button>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.btn}>삭제하기</button>
        </div>
      </Modal>
    );
  }
);

export default DeleteModal;
