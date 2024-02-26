import styles from "../FolderToolBar.module.scss";
import classNames from "classnames/bind";
import Delete from "modal/Delete";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function ShareButton() {
  const [modal, setModal] = useState(true);

  const handleOnclick = () => {
    setModal(!modal);
  };

  return (
    <>
      <Delete modal={modal} handleOnClickClose={handleOnclick} />
      <button className={styles.button} onClick={handleOnclick}>
        <img className={cx("icon")} src="images/trash.svg" alt="삭제" />
        <span className={cx("text")}>삭제</span>
      </button>
    </>
  );
}
