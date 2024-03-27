import deleteImg from "../images/delete.svg";
import penImg from "../images/pen.svg";
import shareImg from "../images/share.svg";
import styles from "./FolderOptions.module.css";
import { MODALS } from "../modal/modals";
//type
import { IsModalClicked } from "./FolderListBar";

interface Props {
  folderName: string;
  folderId: number;
  handleModalClick: (type: keyof IsModalClicked) => void;
}

function FolderOptions({ folderName, folderId, handleModalClick }: Props) {
  const { edit, deleteFolder, share } = MODALS;
  return folderName ? (
    <>
      <div className={styles.folderName}>{folderName}</div>
      {folderId !== 1 && (
        <div className={styles.optionContainer}>
          <div
            className={styles.option}
            onClick={() => handleModalClick(share.type as keyof IsModalClicked)}
          >
            <img src={shareImg} alt="share" />
            <p className={styles.optionText}>공유</p>
          </div>
          <div
            className={styles.option}
            onClick={() => handleModalClick(edit.type as keyof IsModalClicked)}
          >
            <img src={penImg} alt="pen" />
            <p>이름 변경</p>
          </div>
          <div
            className={styles.option}
            onClick={() =>
              handleModalClick(deleteFolder.type as keyof IsModalClicked)
            }
          >
            <img src={deleteImg} alt="delete" />
            <p>삭제</p>
          </div>
        </div>
      )}
    </>
  ) : null;
}

export default FolderOptions;
