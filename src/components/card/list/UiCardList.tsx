import { forwardRef } from 'react';
import styles from './UiCardList.module.scss';
import classNames from 'classnames/bind';

type UiCardListType = {
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

export const UiCardList = forwardRef<HTMLDivElement, UiCardListType>(({ children }, ref) => {
  return (
    <div ref={ref} className={cx('container')}>
      {children}
    </div>
  );
});

UiCardList.displayName = 'UiCardList';

export default UiCardList;
