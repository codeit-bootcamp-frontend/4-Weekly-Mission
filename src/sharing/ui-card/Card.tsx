import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler, ReactNode } from 'react';

const cx = classNames.bind(styles);

interface CardProps {
  children: ReactNode;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <div className={cx("container")} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
