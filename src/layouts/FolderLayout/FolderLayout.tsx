import styles from './FolderLayout.module.scss';
import classNames from 'classnames/bind';

type FolderLayoutType = {
  linkForm: React.ReactNode;
  searchBar: React.ReactNode;
  searchValueText: React.ReactNode;
  folderToolBar: React.ReactNode;
  cardList: React.ReactNode;
};

const cx = classNames.bind(styles);

const FolderLayout = ({
  linkForm,
  searchBar,
  searchValueText,
  folderToolBar,
  cardList,
}: FolderLayoutType) => {
  return (
    <div>
      <div className={cx('container')}>
        {linkForm}
        <div className={cx('items')}>
          {searchBar}
          {searchValueText === '' ? null : (
            <p className={cx('search-text')}>
              <strong>{searchValueText}</strong>으로 검색한 결과입니다.
            </p>
          )}
          <div className={cx('folder-box')}>
            {folderToolBar}
            {cardList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderLayout;
