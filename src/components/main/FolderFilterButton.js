import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({
  name,
  id,
  setFolderName,
  setFolderId,
  folderId,
}) {
  function filterButtonClick() {
    setFolderId(id);
  }
  return (
    <button className={styles.link_filter_button} onClick={filterButtonClick}>
      {name}
    </button>
  );
}

export default FolderFilterButton;
