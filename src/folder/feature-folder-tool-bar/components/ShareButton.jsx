import styles from "../FolderToolBar.module.scss";
import classNames from "classnames/bind";
import Share from "modal/Share";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function ShareButton() {
  const [modal, setModal] = useState(true);

  const handleOnclick = () => {
    setModal(!modal);
  };

  return (
    <>
      <Share modal={modal} handleOnClickClose={handleOnclick} />
      <button className={styles.button} onClick={handleOnclick}>
        <img className={cx("icon")} src="images/share.svg" alt="공유 아이콘" />
        <span className={cx("text")}>공유</span>
      </button>
    </>
  );
}
