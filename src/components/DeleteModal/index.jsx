import { Modal } from "components/Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

export const DeleteModal = forwardRef(
  ({ openModal, handleModalClose, title, description }, ref) => {
    return (
      <Modal
        modalRef={ref}
        openModal={openModal}
        handleModalClose={handleModalClose}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.btn}>삭제하기</button>
        </div>
      </Modal>
    );
  }
);
