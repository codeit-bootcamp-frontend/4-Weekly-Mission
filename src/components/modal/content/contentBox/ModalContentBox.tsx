import styles from './ModalContentBox.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

type ModalContentBoxType = {
  header: React.ReactNode;
  content: React.ReactNode;
  onCloseClick: () => void;
};

const cx = classNames.bind(styles);

const ModalContentBox = ({ header, content, onCloseClick }: ModalContentBoxType) => {
  return (
    <div className={cx('container')}>
      <button onClick={onCloseClick}>
        <Image
          className={cx('close')}
          src="images/close.svg"
          alt="X모양 닫기 버튼"
          width={24}
          height={24}
        />
      </button>
      <div className={cx('items')}>
        {header}
        {content}
      </div>
    </div>
  );
};

export default ModalContentBox;
