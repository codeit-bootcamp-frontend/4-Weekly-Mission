import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FolderButtonProps {
  text: string;
  onClick: () => void;
  isSelected?: boolean;
}

export const FolderButton = ({ text, onClick, isSelected = false }: FolderButtonProps) => {
  return (
    <button className={cx("container", { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};