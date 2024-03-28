import React from "react";
import Modal from "./Modal";
import styles from "./delete.module.scss";

interface DeleteLinkProps {
  isOpen: boolean;
  onClose: () => void;
  selectedName: string;
}

// 링크 추가하기 부분에 넣을 폴더 추가 모달
const DeleteLink = ({ isOpen, onClose, selectedName }: DeleteLinkProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} selectedName={selectedName}>
      <div className={styles.modalInner}>
        <div className={styles.modalText}>
          <h2 className={styles.modalTitle}>링크 삭제</h2>
          <p className={styles.selectedName}>{selectedName}</p>
        </div>
        <button className={styles.modalButton}>삭제하기</button>
      </div>
    </Modal>
  );
};

export default DeleteLink;
