import styles from "./Cta.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from 'react';

interface ChildrenProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const Cta = ({ children }: ChildrenProps) => {
  return <div className={cx("container")}>{children}</div>;
};
