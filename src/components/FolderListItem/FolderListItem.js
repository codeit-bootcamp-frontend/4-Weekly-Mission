import styles from "./FolderListItem.module.css";

function FolderListItem({ folders, selectedId, onSelectedFolder }) {
  const handleClick = (e) => {
    onSelectedFolder({ name: e.target.textContent, id: e.target.id });
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
        <span className={styles["folderAddBtn"]}>폴더 추가+</span>
      </div>
    </div>
  );
}

export default FolderListItem;
