import Folder from "./Folder/Folder";
import styles from "./CardFolderList.module.scss";
import { UserFolderProps } from "@/constants/index.types";

interface CardFolderListProps {
  folders?: UserFolderProps[];
  onClick: (folder: UserFolderProps) => void;
  handleTotalBtnClick: () => void;
}

export default function CardFolderList({
  folders,
  onClick,
  handleTotalBtnClick,
}: CardFolderListProps) {
  return (
    <section className={styles.CardFolderList}>
      <button className={styles.totalBtn} onClick={() => handleTotalBtnClick()}>
        전체
      </button>
      {folders &&
        folders.map((folder) => {
          return <Folder onClick={onClick} key={folder.id} folder={folder} />;
        })}
    </section>
  );
}
