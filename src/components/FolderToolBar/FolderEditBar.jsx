import styles from "./FolderEditBar.module.css";
import IconTextButton from "../IconTextButton/IconTextButton";
import shareIcon from "../../asset/images/share.svg";
import penIcon from "../../asset/images/pen.svg";
import deleteIcon from "../../asset/images/delete.svg";

const FolderEditBar = ({ folderName }) => {
  return (
    <div className={styles.FolderEditBar}>
      <h2 className={styles.title}>{folderName}</h2>
      {folderName === "전체" ? null : (
        <ul className={styles.edit_list}>
          <li>
            <IconTextButton iconSource={shareIcon}>공유</IconTextButton>
          </li>
          <li>
            <IconTextButton iconSource={penIcon}>이름 변경</IconTextButton>
          </li>
          <li>
            <IconTextButton iconSource={deleteIcon}>삭제</IconTextButton>
          </li>
        </ul>
      )}
    </div>
  );
};
export default FolderEditBar;
