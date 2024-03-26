import styles from './ModalContentDescription.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ModalContentDescriptionProps {
  children: React.ReactNode;
}

export const ModalContentDescription = ({ children }: ModalContentDescriptionProps) => {
  return <p className={cx('description')}>{children}</p>;
};
