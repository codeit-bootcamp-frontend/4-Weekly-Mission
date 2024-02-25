import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";
import Add from "modal/Add";
import { useState } from "react";

const cx = classNames.bind(styles);

export const AddFolderButton = ({ onClick }) => {
  const [modal, setModal] = useState(true);

  const handleOnclick = () => {
    setModal(!modal);
  };

  return (
    <>
      <Add modal={modal} handleOnClickClose={handleOnclick} />
      <button className={cx("container")} onClick={handleOnclick}>
        <span>폴더 추가</span>
        <AddIcon className={cx("icon")} />
      </button>
    </>
  );
};
