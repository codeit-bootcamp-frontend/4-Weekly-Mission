/* eslint-disable */
import styles from './KebabModal.module.css';
export default function KebabModal() {
  return (
    <div className={styles['kebab-modal-wrapper']}>
      <button className={styles['kekbab-modal-delete-button']}>삭제하기</button>
      <button className={styles['kekbab-modal-add-folder-button']}>
        폴더에 추가
      </button>
    </div>
  );
}
