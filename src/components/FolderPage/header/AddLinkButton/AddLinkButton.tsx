import styles from './AddLinkButton.module.css';


interface ClickFunction {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLSpanElement>
  ) => void;
}
function AddLinkButton({ handleAddLinkInFolderModalClick }: ClickFunction) {
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
