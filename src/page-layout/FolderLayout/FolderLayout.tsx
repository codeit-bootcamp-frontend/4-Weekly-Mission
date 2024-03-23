import styles from "./FolderLayout.module.scss";
import classNames from "classnames/bind";

type FolderLayoutType = {
  linkForm: React.ReactNode;
  searchBar: React.ReactNode;
  folderToolBar: React.ReactNode;
  cardList: React.ReactNode;
};

const cx = classNames.bind(styles);

export const FolderLayout = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}: FolderLayoutType) => {
  return (
    <div className={cx("container")}>
      {linkForm}
      <div className={cx("items")}>
        {searchBar}
        <div className={cx("folder-box")}>
          {folderToolBar}
          {cardList}
        </div>
      </div>
    </div>
  );
};
