import { useState } from "react";
import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";
import { AddFolder } from "modal/add-folder";

const cx = classNames.bind(styles);

export const AddFolderButton = ({ onclick }) => {
  const [isEnabled, setEnabled] = useState(false);

  const handleMouseClick = (event) => {
    event.preventDefault();
    setEnabled(!isEnabled);
  };
  return (
    <button className={cx("container")} onClick={handleMouseClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
      {isEnabled && <AddFolder handleMouseClick={handleMouseClick} />}
    </button>
  );
};
