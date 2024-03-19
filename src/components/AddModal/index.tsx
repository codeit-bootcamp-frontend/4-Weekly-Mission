import { Modal } from "../Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
}

export const AddModal = forwardRef(
  ({ openModal, handleModalClose }: Props, ref) => {
    return (
      <Modal
        modalRef={ref as React.RefObject<HTMLDivElement>}
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
  }
);
