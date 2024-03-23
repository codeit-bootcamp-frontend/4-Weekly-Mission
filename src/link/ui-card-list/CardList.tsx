import { ReactNode, forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// 멘토님께 질문 칠드런 이런식으로 해주는게 맞는지..?
interface CardListProps {
  children?: ReactNode;
}

export const CardList = forwardRef<HTMLDivElement, CardListProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
