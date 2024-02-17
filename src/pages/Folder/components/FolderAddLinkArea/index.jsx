import linkImg from "assets/link.png";
import styles from "./styles.module.css";

export default function FolderAddLinkArea() {
  return (
    <div className={styles.container}>
      <div className={styles.addLinkAreaWrapper}>
        <div className={styles.addLinkArea}>
          <img src={linkImg} alt="linkIconImg" />
          <input
            style={{ width: "80%", textAlign: "initial" }}
            type="url"
            placeholder="링크를 추가해 보세요"
          />
          <button className={styles.btn}>추가하기</button>
        </div>
      </div>
    </div>
  );
}
