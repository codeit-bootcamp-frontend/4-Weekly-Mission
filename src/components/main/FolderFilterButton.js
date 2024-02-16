import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({ name, id, setFolderName }) {
  function handleFilterButtonClick() {
    setFolderName(name);
  }
  return (
    <button
      className={styles.link_filter_button}
      onClick={handleFilterButtonClick}
    >
      {name}
    </button>
  );
}

export default FolderFilterButton;
