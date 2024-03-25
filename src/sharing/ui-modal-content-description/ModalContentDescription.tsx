import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from 'react';

interface ChildrenProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ModalContentDescription = ({ children }: ChildrenProps) => {
  return <p className={cx("description")}>{children}</p>;
};
