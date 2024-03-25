import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FolderButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
}

export const FolderButton: React.FC<FolderButtonProps> = ({ text, onClick, isSelected = false }) => {
  return (
    <button className={cx("container", { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};