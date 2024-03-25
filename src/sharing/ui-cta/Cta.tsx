import { ChildrenProps } from "@/types/children";
import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Cta = ({ children }: ChildrenProps) => {
  return <div className={cx("container")}>{children}</div>;
};
