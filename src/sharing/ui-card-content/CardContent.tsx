import { ReactNode } from "react";
import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";

interface Props {
  elapsedTime: ReactNode;
  description: string;
  createdAt: ReactNode;
  isHovered: boolean;
}

const cx = classNames.bind(styles);

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: Props) => {
  return (
    <div className={cx("container", { hovered: isHovered })}>
      <span className={cx("elapsed-time")}>{elapsedTime}</span>
      <p className={cx("description")}>{description}</p>
      <span className={cx("created-at")}>{createdAt}</span>
    </div>
  );
};
