import Folder from "./Folder/Folder";
import styles from "./CardFolderList.module.scss";

interface FoldersProps {
  folders: UserFolderProps;
}

export default function CardFolderList({
  folders,
  onClick,
  handleTotalBtnClick,
}: ) {
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
