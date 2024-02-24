import styles from "./FolderListCtrl.module.css";
import deleteImg from "assets/delete.svg";
import penImg from "assets/pen.svg";
import shareImg from "assets/share.svg";

const FolderListCtrl = ({ folderName, setModal }) => {
  const handleModalClick = (e) => {
    const value = e.target.value;
    setModal(value);
  };

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
              <button value="shareFolder" onClick={handleModalClick}>
                공유
              </button>
            </div>
            <div className={styles.controlMenuItem}>
              <img src={penImg} alt="penIconImage" />
              <button value="changeFolderName" onClick={handleModalClick}>
                이름 변경
              </button>
            </div>
            <div className={styles.controlMenuItem}>
              <img src={deleteImg} alt="deleteIconImage" />
              <button value="deleteFolder" onClick={handleModalClick}>
                삭제
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderListCtrl;
