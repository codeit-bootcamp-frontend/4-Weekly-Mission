import styles from './Card.module.scss';
import classNames from 'classnames/bind';

type CardType = {
  children: React.ReactNode;
  onMouseOver: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
};

const cx = classNames.bind(styles);

const Card = ({ children, onMouseOver, onMouseLeave }: CardType) => {
  return (
    <div className={cx('container')} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Card;
