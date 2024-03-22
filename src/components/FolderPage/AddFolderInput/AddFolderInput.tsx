import styles from "./AddFolderInput.module.css";
import linkLogo from "assets/folderLink.svg";

const AddFolderInput = () => {
  return (
    <div className={styles["addLink"]}>
      <input
        className={styles["addLink-input"]}
        placeholder="링크를 추가해 보세요"
      />
      <img className={styles["linkLogo"]} src={linkLogo} alt="링크로고"/>
      <button className={styles["addLink-btn"]}>추가하기</button>
    </div>
  );
};

export default AddFolderInput;
