/* eslint-disable */
import styles from './KebabModal.module.css';
export default function KebabModal({
  handleClickKebabModal,
  handleDeleteLinkModalClick,
  handleAddLinkInFolderModalClick,
  url,
  setSharedUrl,
}) {
  function handleKebabDeleteClick() {
    handleClickKebabModal();
    handleDeleteLinkModalClick();
  }

  function handleKebabAddLinkInFolderClick() {
    handleClickKebabModal();
    handleAddLinkInFolderModalClick();
    setSharedUrl(url);
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
        onClick={handleKebabAddLinkInFolderClick}
      >
        폴더에 추가
      </button>
    </div>
  );
}
