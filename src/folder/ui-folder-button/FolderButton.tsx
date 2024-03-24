import { MouseEvent } from "react";
import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

interface Props {
  text: string;
  onClick: (e: MouseEvent) => void;
  isSelected: boolean;
}

const cx = classNames.bind(styles);

export const FolderButton = ({ text, onClick, isSelected = false }: Props) => {
  return (
    <button
      className={cx("container", { selected: isSelected })}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
