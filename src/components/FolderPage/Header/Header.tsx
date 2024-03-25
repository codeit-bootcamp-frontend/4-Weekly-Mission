import { forwardRef } from "react";
import AddFolderInput from "../AddFolderInput/AddFolderInput";
import styles from "./Header.module.css";

const Header = ({inView, headerInView } : any) => {
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["header-Container"]}>
          <AddFolderInput headerInView={headerInView} inView={inView} />
        </div>
      </div>
    </>
  );
};

export default Header;
