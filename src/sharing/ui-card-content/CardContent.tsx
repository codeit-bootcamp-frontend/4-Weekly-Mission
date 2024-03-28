import styles from './CardContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface CardContentProps {
  elapsedTime: number;
  description: string;
  createdAt: number;
  isHovered?: boolean;
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: CardContentProps) => {
  return (
    <div className={cx('container', { hovered: isHovered })}>
      <span className={cx('elapsed-time')}>{elapsedTime}</span>
      <p className={cx('description')}>{description}</p>
      <span className={cx('created-at')}>{createdAt}</span>
    </div>
  );
};
