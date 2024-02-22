import { Modal } from "components/Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

export const ModifyModal = forwardRef(
  ({ openModal, handleModalClose, folderName }, ref) => {
    return (
      <Modal
        modalRef={ref}
        openModal={openModal}
        handleModalClose={handleModalClose}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>폴더 이름 변경</h2>
          <input
            className={styles.input}
            type="text"
            placeholder={folderName}
          />
          <button className={styles.btn}>변경하기</button>
        </div>
      </Modal>
    );
  }
);
