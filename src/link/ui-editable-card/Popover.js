import React from 'react';
import styles from './Popover.module.scss';

const Popover = ({ isOpen, onClose, onDelete, onAddToFolder }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popover}>
      <button className={styles.option} onClick={onDelete}>
        삭제하기
      </button>
      <button className={styles.option} onClick={onAddToFolder}>
        폴더에 추가하기
      </button>
    </div>
  );
};

export default Popover;
