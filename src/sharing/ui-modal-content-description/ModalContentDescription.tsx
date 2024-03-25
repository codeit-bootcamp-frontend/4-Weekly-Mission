import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";
import { PropsWithChildren } from "react";

const cx = classNames.bind(styles);

export const ModalContentDescription = ({ children }: PropsWithChildren) => {
  return <p className={cx("description")}>{children}</p>;
};
