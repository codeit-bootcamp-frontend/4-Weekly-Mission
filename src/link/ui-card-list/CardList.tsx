import { ReactNode, ForwardedRef, forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

interface CardListProps {
  children: ReactNode;
}
const cx = classNames.bind(styles);

export const CardList = forwardRef(
  ({ children }: CardListProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
