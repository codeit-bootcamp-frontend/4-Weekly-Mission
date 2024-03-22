import AddFolderInput from "../AddFolderInput/AddFolderInput";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["header-Container"]}>
          <AddFolderInput />
        </div>
      </div>
    </>
  );
};

export default Header;
