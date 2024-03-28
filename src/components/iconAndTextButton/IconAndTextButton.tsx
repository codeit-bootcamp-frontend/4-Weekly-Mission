import styles from './IconAndTextButton.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

type IconAndTextButtonType = {
  iconSource: string;
  text?: string;
  onClick: () => void;
};

const cx = classNames.bind(styles);

const IconAndTextButton = ({ iconSource, text, onClick }: IconAndTextButtonType) => {
  return (
    <button className={cx('container')} onClick={onClick}>
      <Image
        className={cx('icon')}
        src={iconSource}
        alt={`${text} 아이콘`}
        width={19}
        height={19}
      />
      <span className={cx('text')}>{text}</span>
    </button>
  );
};

export default IconAndTextButton;
