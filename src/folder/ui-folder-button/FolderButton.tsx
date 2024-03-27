import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
const cx = classNames.bind(styles);

interface FolderButtonProps {
  text?: string;
  onClick: MouseEventHandler;
  isSelected: boolean;
}

export const FolderButton = ({
  text,
  onClick,
  isSelected = false,
}: FolderButtonProps) => {
  return (
    <button
      className={cx("container", { selected: isSelected })}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
