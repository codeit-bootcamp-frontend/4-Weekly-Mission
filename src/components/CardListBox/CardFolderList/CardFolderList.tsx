import Folder from "./Folder/Folder";
import styles from "./CardFolderList.module.scss";
import { ObjectFolder } from "@/constants/index.types";

interface CardFolderListProps {
  folders: ObjectFolder[];
  onFolderClick: (folder: ObjectFolder) => void;
  onTotalButtonClick: () => void;
}

export default function CardFolderList({
  folders,
  onFolderClick,
  onTotalButtonClick,
}: CardFolderListProps) {
  return (
    <section className={styles.CardFolderList}>
      <button
        className={styles.totalBtn}
        onClick={onTotalButtonClick}
        type="button"
      >
        전체
      </button>
      {folders &&
        folders.map((folder) => (
          <Folder
            onFolderClick={onFolderClick}
            key={folder.id}
            folder={folder}
          />
        ))}
    </section>
  );
}
