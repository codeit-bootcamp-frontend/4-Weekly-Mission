import Folder from "./Folder/Folder";
import styles from "./CardFolderList.module.scss";
import { UserFolderProps } from "@/constants/index.types";

interface CardFolderListProps {
  folders?: UserFolderProps[];
  handleFolderClick: (folder: UserFolderProps) => void;
  handleTotalBtnClick: () => void;
}

export default function CardFolderList({
  folders,
  handleFolderClick,
  handleTotalBtnClick,
}: CardFolderListProps) {
  return (
    <section className={styles.CardFolderList}>
      <button className={styles.totalBtn} onClick={() => handleTotalBtnClick()}>
        전체
      </button>
      {folders &&
        folders.map((folder) => {
          return (
            <Folder
              handleFolderClick={handleFolderClick}
              key={folder.id}
              folder={folder}
            />
          );
        })}
    </section>
  );
}
