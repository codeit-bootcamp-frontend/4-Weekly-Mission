import { MouseEventHandler } from "react";
import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  folderName: string;
  linkCount: number;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: Props) => {
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
