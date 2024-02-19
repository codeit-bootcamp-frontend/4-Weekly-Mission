import styles from "./FolderListCtrl.module.css";
import deleteImg from "assets/delete.svg";
import penImg from "assets/pen.svg";
import shareImg from "assets/share.svg";

const FolderListCtrl = ({ folderName }) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles.container}>
        <div className={styles.folderName}>{folderName}</div>
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
    </div>
  );
};

export default FolderListCtrl;
