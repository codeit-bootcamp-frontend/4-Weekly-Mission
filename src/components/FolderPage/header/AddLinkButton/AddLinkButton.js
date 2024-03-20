import styles from './AddLinkButton.module.css';

function AddLinkButton({ handleAddLinkInFolderModalClick }) {
  return (
    <button
      className={styles['add-link-button']}
      onClick={handleAddLinkInFolderModalClick}
    >
      추가하기
    </button>
  );
}

export default AddLinkButton;
