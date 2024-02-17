import styles from "./styles.module.css";
import deleteImg from "assets/delete.png";
import penImg from "assets/pen.png";
import shareImg from "assets/share.png";

export default function FolderControl({ folderName }) {
  return (
    <div className={styles.container}>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>{folderName}</div>

      {folderName === "전체" ? (
        <></>
      ) : (
        <div className={styles.controlMenu}>
          <div className={styles.controlMenuItem}>
            <img src={shareImg} alt="shareIconImage" />
            <span>공유</span>
          </div>
          <div className={styles.controlMenuItem}>
            <img src={penImg} alt="penIconImage" />
            <span>이름 변경</span>
          </div>
          <div className={styles.controlMenuItem}>
            <img src={deleteImg} alt="deleteIconImage" />
            <span>삭제</span>
          </div>
        </div>
      )}
    </div>
  );
}
