import styles from "../FolderToolBar.module.scss";
import classNames from "classnames/bind";
import Rename from "modal/Rename";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function ShareButton() {
  const [modal, setModal] = useState(true);

  const handleOnclick = () => {
    setModal(!modal);
  };

  return (
    <>
      <Rename modal={modal} handleOnClickClose={handleOnclick} />
      <button className={styles.button} onClick={handleOnclick}>
        <img className={cx("icon")} src="images/pen.svg" alt="이름 변경" />
        <span className={cx("text")}>이름 변경</span>
      </button>
    </>
  );
}
