import styles from "./AddToFolderModal.module.css";
import checkImg from "../../images/check.png";

function FolderInModal({ folder, isClicked, onClickFolder }) {
  const folderNameClassName = isClicked
    ? styles.clickedFolderName
    : styles.folderName;
  return (
    <>
      <button className={styles.folderButton} onClick={onClickFolder}>
        <div className={styles.textContainer}>
          <span className={folderNameClassName}>{folder.name}</span>
          <span className={styles.linkCount}>{folder.link.count}개 링크</span>
        </div>
        {isClicked && <img src={checkImg} alt="checkImg" />}
      </button>
    </>
  );
}

export default FolderInModal;
