import styles from "./styles.module.css";
import useWindowSize from "hooks/useWindowSize";

export default function FolderCategory({
  folders,
  selectedId,
  onSelectedFolder,
}) {
  const [windowSize] = useWindowSize();

  const handleClick = (e) => {
    onSelectedFolder({ name: e.target.textContent, id: e.target.id });
  };

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        <span
          className={`${styles.tag} ${
            selectedId === null ? styles.selected : ""
          }`}
          id={null}
          onClick={handleClick}
        >
          전체
        </span>
        {folders.map((folder) => (
          <span
            className={`${styles.tag} ${
              folder.id === selectedId ? styles.selected : ""
            }`}
            key={folder.id}
            id={folder.id}
            onClick={handleClick}
          >
            {folder.name}
          </span>
        ))}
      </div>
      <span
        className={`${styles.folderAddBtn} ${
          windowSize < 580 ? styles.floating : ""
        }`}
      >
        폴더추가+
      </span>
    </div>
  );
}
