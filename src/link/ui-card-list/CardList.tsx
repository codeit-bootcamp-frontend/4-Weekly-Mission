import { forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

type CardListType = {
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

export const CardList = forwardRef<HTMLDivElement, CardListType>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
