import styles from "./SharedLayout.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface props {
  folderInfo: ReactNode;
  searchBar: ReactNode;
  cardList: ReactNode;
}

export const SharedLayout = ({ folderInfo, searchBar, cardList }: props) => {
  return (
    <div className={cx("container")}>
      {folderInfo}
      <div className={cx("items")}>
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
