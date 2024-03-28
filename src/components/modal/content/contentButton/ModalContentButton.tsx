import styles from './ModalContentButton.module.scss';
import classNames from 'classnames/bind';

type ModalContentButtonType = {
  children: string;
  onClick?: () => void;
  themeColor?: string;
};

const cx = classNames.bind(styles);

const ModalContentButton = ({ children, onClick, themeColor = 'blue' }: ModalContentButtonType) => {
  return (
    <button className={cx('button', themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModalContentButton;
