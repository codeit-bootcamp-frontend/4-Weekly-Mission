import React from "react";
import Modal from "./Modal";
import styles from "./addChange.module.scss";

interface ChangeNameProps {
  isOpen: boolean;
  onClose: () => void;
}

// 링크 추가하기 부분에 넣을 폴더 추가 모달
const ChangeName = ({ isOpen, onClose }: ChangeNameProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalInner}>
        <h2 className={styles.modalTitle}>폴더 이름 변경</h2>
        <div className={styles.modalInput}>
          <input className={styles.input} placeholder="유용한 팁" />
          <button className={styles.modalButton}>변경하기</button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeName;
