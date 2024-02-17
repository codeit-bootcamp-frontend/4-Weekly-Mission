import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({ name, id, setSearchParams }) {
  function handleClick() {
    setSearchParams({ folderId: id });
  }
  return (
    <button className={styles.link_filter_button} onClick={handleClick}>
      {name}
    </button>
  );
}

export default FolderFilterButton;
