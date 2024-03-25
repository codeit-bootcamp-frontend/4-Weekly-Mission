import { PropsWithChildren } from "react";
import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentTitle = ({ children }: PropsWithChildren) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
