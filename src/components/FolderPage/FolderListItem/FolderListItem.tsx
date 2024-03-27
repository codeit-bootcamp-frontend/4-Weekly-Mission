import styles from "./FolderListItem.module.css";
import { MouseEvent } from "react";


interface Props {
  folders: [{
    id: string;
    name: string;
  }];
  selectedId:  string;
  onSelectedFolder:({ name, id }: {name: string | null, id: number|string }) => void
  setModal: (value: string) => void;
}


function FolderListItem({ folders, selectedId, onSelectedFolder, setModal } : Props) {
  const handleClick = (e : MouseEvent<HTMLSpanElement>) => {
    onSelectedFolder({ name: (e.currentTarget as HTMLSpanElement).textContent, id: (e.currentTarget as HTMLSpanElement).id });
  };

  const handleModalClick = (e : MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    setModal(value);
  };


  return (
    <div className={styles["wrapper"]}>
      <div className={styles.container}>
        <div className={styles.tags}>
          <span
            className={`${styles.tag} ${
              selectedId === null ? styles.selected : ""
            }`}
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
