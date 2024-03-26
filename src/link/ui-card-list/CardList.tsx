import { ReactNode, forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// 멘토님께 질문 children 이런식으로 해주는게 맞는지..?
// 하다가 일단 이 파일제외하고 다른 children 쓰는 부분은 분리 했는데 맞는지 모르겠습니다
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
