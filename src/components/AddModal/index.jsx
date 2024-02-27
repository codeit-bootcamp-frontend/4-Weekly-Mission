import { Modal } from "components/Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

export const AddModal = forwardRef(({ openModal, handleModalClose }, ref) => {
  return (
    <Modal
      modalRef={ref}
      openModal={openModal}
      handleModalClose={handleModalClose}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>폴더 추가</h2>
        <input className={styles.input} type="text" placeholder="내용 입력" />
        <button className={styles.btn}>변경하기</button>
      </div>
    </Modal>
  );
});
