import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";

type FolderItemType = {
  folderName: string;
  linkCount: number | undefined;
  isSelected: boolean;
  onClick: () => void;
};

const cx = classNames.bind(styles);

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemType) => {
  return (
    <button className={cx("button", { isSelected })} onClick={onClick}>
      <span className={cx("name", { isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && (
        <img className={cx("check")} src="images/check.svg" alt="체크 아이콘" />
      )}
    </button>
  );
};
