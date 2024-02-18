import deleteImg from "../images/delete.svg";
import penImg from "../images/pen.svg";
import shareImg from "../images/share.svg";
import style from "./FolderOptions.module.css";

function FolderOptions({ folderName }) {
  return (
    folderName && (
      <>
        <div className={style.folderName}>{folderName}</div>
        <div className={style.optionContainer}>
          <div className={style.option}>
            <img src={shareImg} alt="share" />
            <p className={style.optionText}>공유</p>
          </div>
          <div className={style.option}>
            <img src={penImg} alt="pen" />
            <p>이름 변경</p>
          </div>
          <div className={style.option}>
            <img src={deleteImg} alt="delete" />
            <p>삭제</p>
          </div>
        </div>
      </>
    )
  );
}

export default FolderOptions;
