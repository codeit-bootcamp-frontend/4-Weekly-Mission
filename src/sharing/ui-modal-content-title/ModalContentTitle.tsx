import styles from './ModalContentTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ModalContentTitleProps {
  children: React.ReactNode;
}

export const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <h2 className={cx('title')}>{children}</h2>;
};
