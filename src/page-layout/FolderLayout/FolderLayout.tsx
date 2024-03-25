import styles from "./FolderLayout.module.scss";
import { FC, ReactNode } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FolderLayoutProps {
  linkForm: ReactNode;
  searchBar: ReactNode;
  folderToolBar: ReactNode;
  cardList: ReactNode | null;
}

export const FolderLayout: FC<FolderLayoutProps> = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}) => {
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
