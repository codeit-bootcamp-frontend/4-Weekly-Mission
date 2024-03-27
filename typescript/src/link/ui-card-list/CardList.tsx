import { forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";
import { ReactNode, RefObject } from "react";

const cx = classNames.bind(styles);

interface props {
  children: ReactNode;
  ref: RefObject<HTMLDivElement>;
}

export const CardList = forwardRef<HTMLDivElement, props>(
  ({ children }: props, ref) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
