import { Modal } from "../Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
  title: string;
  description: string;
}

export const DeleteModal = forwardRef(
  ({ openModal, handleModalClose, title, description }: Props, ref) => {
    return (
      <Modal
        modalRef={ref as React.RefObject<HTMLDivElement>}
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
