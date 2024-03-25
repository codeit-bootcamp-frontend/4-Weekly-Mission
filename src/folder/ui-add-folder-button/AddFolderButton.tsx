import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";

interface AddFolderButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const cx = classNames.bind(styles);

export const AddFolderButton: React.FC<AddFolderButtonProps> = ({ onClick }) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};