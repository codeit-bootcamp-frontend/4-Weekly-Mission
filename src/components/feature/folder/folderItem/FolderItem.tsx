import styles from './FolderItem.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

type FolderItemType = {
  folderName: string;
  linkCount: number | undefined;
  isSelected: boolean;
  onClick: () => void;
};

const cx = classNames.bind(styles);

const FolderItem = ({ folderName, linkCount, isSelected = false, onClick }: FolderItemType) => {
  return (
    <button className={cx('button', { isSelected })} onClick={onClick}>
      <span className={cx('name', { isSelected })}>{folderName}</span>
      <span className={cx('count')}>{linkCount}개 링크</span>
      {isSelected && (
        <Image
          className={cx('check')}
          src="images/check.svg"
          alt="체크 아이콘"
          width={14}
          height={14}
        />
      )}
    </button>
  );
};

export default FolderItem;
