import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ModalContentTitle = ({ children }: ChildrenProps) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
