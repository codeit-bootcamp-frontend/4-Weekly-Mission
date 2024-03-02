import styles from "./FolderAddButton.module.css";
import { ReactComponent as AddIcon } from "../../asset/images/add.svg";

const FolderAddButton = ({ className }) => {
  return (
    <button className={`${className} ${styles.FolderAddButton}`}>
      <span className={styles.text}>폴더 추가</span>
      <AddIcon className={styles.icon} />
    </button>
  );
};

export default FolderAddButton;
