import linkImg from "assets/link.png";
import styles from "./styles.module.css";

export function FolderAddLinkArea() {
  return (
    <div className={styles.container}>
      <div className={styles.addLinkAreaWrapper}>
        <div className={styles.addLinkArea}>
          <img src={linkImg} alt="linkIconImg" />
          <input
            className={styles.addLinkInput}
            type="url"
            placeholder="링크를 추가해 보세요"
          />
          <button className={styles.btn}>추가하기</button>
        </div>
      </div>
    </div>
  );
}
