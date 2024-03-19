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

// 내일 할일
// 팀미팅 주제 준비
// 트리 포스팅
// 회고 포스팅
// 미션 리펙토링
