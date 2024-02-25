import deleteImg from "../images/delete.svg";
import penImg from "../images/pen.svg";
import shareImg from "../images/share.svg";
import styles from "./FolderOptions.module.css";
import { MODALS } from "../modal/modals";

function FolderOptions({ folderName, folderId, handleModalClick }) {
  const { edit, deleteFolder, share } = MODALS;
  return (
    folderName && (
      <>
        <div className={styles.folderName}>{folderName}</div>
        {folderId !== 1 && (
          <div className={styles.optionContainer}>
            <div className={styles.option}>
              <img src={shareImg} alt="share" />
              <p className={styles.optionText}>공유</p>
            </div>
            <div
              className={styles.option}
              onClick={() => handleModalClick(edit.type)}
            >
              <img src={penImg} alt="pen" />
              <p>이름 변경</p>
            </div>
            <div
              className={styles.option}
              onClick={() => handleModalClick(deleteFolder.type)}
            >
              <img src={deleteImg} alt="delete" />
              <p>삭제</p>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default FolderOptions;
