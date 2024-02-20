import BaseModeal from "../BaseModal/BaseModal";
import styles from "./folder.module.css";

function FolderModal({ variant }) {
  // edit -> input
  // add-folder -> inpit
  // add-link -> list

  let title, action;
  if (variant === "edit") {
    title = "폴더 이름 변경";
    action = "변경하기";
  } else if (variant === "add-folder") {
    title = "폴더 추가";
    action = "추가하기";
  } else if (variant === "add-link") {
    title = "폴더에 추가";
    action = "추가하기";
  }

  return (
    <BaseModeal title={title}>
      <input type="text" className={styles.input} placeholder="내용 입력" />
      <button className={`${styles.btn} ${styles[variant]}`}>{action}</button>
    </BaseModeal>
  );
}

export default FolderModal;
