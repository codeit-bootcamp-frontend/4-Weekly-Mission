import styles from '../styles/CardPopover.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const CardPopover = () => {

  return (
    <div className={cn('card-popover')}>
      <div className={cn('card-popover-menu')}>
        <p>삭제하기</p>
      </div>
      <div className={cn('card-popover-menu')}>
        <p>폴더에 추가</p>
      </div>
    </div>
  );
};

export default CardPopover;