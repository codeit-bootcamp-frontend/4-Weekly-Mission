import { forwardRef, Ref, ReactNode } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface CardListProps {
  children: ReactNode;
}
export const CardList = forwardRef<HTMLDivElement, CardListProps>(
  ({ children }, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
