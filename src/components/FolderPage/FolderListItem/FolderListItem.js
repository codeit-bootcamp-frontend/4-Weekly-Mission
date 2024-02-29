import styles from "./FolderListItem.module.css";

function FolderListItem({ folders, selectedId, onSelectedFolder, setModal }) {
  const handleClick = (e) => {
    onSelectedFolder({ name: e.target.textContent, id: e.target.id });
  };

  const handleModalClick = (e) => {
    const value = e.target.value;
    setModal(value);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles.container}>
        <div className={styles.tags}>
          <span
            className={`${styles.tag} ${
              selectedId === "" ? styles.selected : ""
            }`}
            id={null}
            onClick={handleClick}
          >
            전체
          </span>
          {folders.map((folder) => (
            <span
              className={`${styles.tag} ${
                folder.id === parseInt(selectedId) ? styles.selected : ""
              }`}
              key={folder.id}
              id={folder.id}
              onClick={handleClick}
            >
              {folder.name}
            </span>
          ))}
        </div>
        <button
          value="addFolder"
          className={styles["folderAddBtn"]}
          onClick={handleModalClick}
        >
          폴더 추가+
        </button>
      </div>
    </div>
  );
}

export default FolderListItem;
