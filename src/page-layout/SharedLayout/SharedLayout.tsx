import styles from "./SharedLayout.module.scss";
import classNames from "classnames/bind";

type SharedLayoutType = {
  folderInfo: React.ReactNode;
  searchBar: React.ReactNode;
  cardList: React.ReactNode;
};

const cx = classNames.bind(styles);

export const SharedLayout = ({
  folderInfo,
  searchBar,
  cardList,
}: SharedLayoutType) => {
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
