import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";
import { MouseEvent } from "react";

const cx = classNames.bind(styles);

interface Props {
  onClick: (e: MouseEvent) => void;
}

export const AddFolderButton = ({ onClick }: Props) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};
