import styles from './CardContent.module.scss';
import classNames from 'classnames/bind';

type CardContentType = {
  elapsedTime?: string;
  description?: string;
  createdAt?: string;
  isHovered: boolean;
};

const cx = classNames.bind(styles);

const CardContent = ({ elapsedTime, description, createdAt, isHovered }: CardContentType) => {
  return (
    <div className={cx('container', { hovered: isHovered })}>
      <span className={cx('elapsed-time')}>{elapsedTime}</span>
      <p className={cx('description')}>{description}</p>
      <span className={cx('created-at')}>{createdAt}</span>
    </div>
  );
};

export default CardContent;
