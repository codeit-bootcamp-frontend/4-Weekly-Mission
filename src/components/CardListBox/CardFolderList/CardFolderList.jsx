import Folder from "./Folder/Folder";
import styles from "./CardFolderList.module.scss";

export default function CardFolderList({ folders }) {
  return (
    <section className={styles.CardFolderList}>
      <button className={styles.totalBtn}>전체</button>
      {folders &&
        folders.map((folder) => {
          return <Folder key={folder.id} folder={folder} />;
        })}
    </section>
  );
}
