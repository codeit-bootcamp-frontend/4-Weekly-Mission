import styles from './ModalContentTitle.module.scss';
import classNames from 'classnames/bind';

type ModalContentTitleType = {
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

const ModalContentTitle = ({ children }: ModalContentTitleType) => {
  return <h2 className={cx('title')}>{children}</h2>;
};

export default ModalContentTitle;
