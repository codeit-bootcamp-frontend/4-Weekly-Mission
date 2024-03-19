import { Modal } from "../Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
  folderName: string;
}

export const ModifyModal = forwardRef(
  ({ openModal, handleModalClose, folderName }: Props, ref) => {
    return (
      <Modal
        modalRef={ref as React.RefObject<HTMLDivElement>}
        openModal={openModal}
        handleModalClose={handleModalClose}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>폴더 이름 변경</h2>
          <input
            className={styles.input}
            type="text"
            defaultValue={folderName}
          />
          <button className={styles.btn}>변경하기</button>
        </div>
      </Modal>
    );
  }
);
