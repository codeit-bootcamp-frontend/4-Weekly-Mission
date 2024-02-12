import styles from "../../css/Main.module.css";
import LinkSearchInput from "./LinkSearchInput";
import FolderList from "./FolderList";
function Main() {
  return (
    <div className={styles.main_wrapper}>
      <LinkSearchInput />
      <FolderList />
    </div>
  );
}

export default Main;
