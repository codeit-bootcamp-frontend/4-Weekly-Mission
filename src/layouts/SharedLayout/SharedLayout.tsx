import styles from './SharedLayout.module.scss';
import classNames from 'classnames/bind';

type SharedLayoutType = {
  folderInfo: React.ReactNode;
  searchBar: React.ReactNode;
  searchValueText: React.ReactNode;
  cardList: React.ReactNode;
};

const cx = classNames.bind(styles);

const SharedLayout = ({ folderInfo, searchBar, searchValueText, cardList }: SharedLayoutType) => {
  return (
    <div className={cx('container')}>
      {folderInfo}
      <div className={cx('items')}>
        {searchBar}
        {searchValueText === '' ? null : (
          <p className={cx('search-text')}>
            <strong>{searchValueText}</strong>으로 검색한 결과입니다.
          </p>
        )}
        {cardList}
      </div>
    </div>
  );
};

export default SharedLayout;
