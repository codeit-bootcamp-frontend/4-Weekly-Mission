import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";
import { useState } from "react";
import AddFolderModal from "link/Modal/AddFolderModal";

const cx = classNames.bind(styles);

export const AddFolderButton = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <button className={cx("container")} onClick={onClick}>
      <span onClick={() => setShowModal(true)}>폴더 추가</span>
      {showModal && <AddFolderModal onClose={() => setShowModal(false)} />}
      <AddIcon className={cx("icon")} />
    </button>
  );
};
