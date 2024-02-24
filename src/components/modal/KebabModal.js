/* eslint-disable */
import styles from './KebabModal.module.css';
export default function KebabModal({
  handleClickKebabModal,
  handleDeleteLinkModalClick,
}) {
  function handleKebabDeleteClick() {
    handleClickKebabModal();
    handleDeleteLinkModalClick();
  }
  return (
    <div className={styles['kebab-modal-wrapper']}>
      <button
        className={styles['kekbab-modal-delete-button']}
        onClick={handleKebabDeleteClick}
      >
        삭제하기
      </button>
      <button
        className={styles['kekbab-modal-add-folder-button']}
        onClick={handleClickKebabModal}
      >
        폴더에 추가
      </button>
    </div>
  );
}
