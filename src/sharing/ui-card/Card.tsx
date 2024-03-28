import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles);

interface CardProps {
  children: React.ReactNode;
  onMouseOver: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <div className={cx('container')} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
