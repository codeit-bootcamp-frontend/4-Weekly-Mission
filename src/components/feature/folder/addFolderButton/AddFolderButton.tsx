import styles from './AddFolderButton.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

type AddFolderButtonType = {
  onClick: () => void;
};

const cx = classNames.bind(styles);

const AddFolderButton = ({ onClick }: AddFolderButtonType) => {
  return (
    <button className={cx('container')} onClick={onClick}>
      <span>폴더 추가</span>
      <Image className={cx('icon')} src="/images/add.svg" alt="추가" width={16} height={17} />
    </button>
  );
};

export default AddFolderButton;
