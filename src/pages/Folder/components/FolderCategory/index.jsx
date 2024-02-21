import styles from "./styles.module.css";

export function FolderCategory({ folders, selectedId, onSelectedFolder }) {
  const handleClick = (e) => {
    onSelectedFolder({ name: e.target.textContent, id: e.target.id });
  };

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        <span
          className={`${styles.tag} ${!selectedId ? styles.selected : ""}`}
          onClick={handleClick}
        >
          전체
        </span>
        {folders.map((folder) => (
          <span
            className={`${styles.tag} ${
              folder.id == selectedId ? styles.selected : ""
            }`}
            key={folder.id}
            id={folder.id}
            onClick={handleClick}
          >
            {folder.name}
          </span>
        ))}
      </div>
      <span className={styles.folderAddBtn}>폴더 추가+</span>
    </div>
  );
}
