import { ReactNode } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface CardProps {
  children?: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}
export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <div
      className={cx("container")}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
