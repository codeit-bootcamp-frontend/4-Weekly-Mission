import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

type CtaType = {
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

export const Cta = ({ children }: CtaType) => {
  return <div className={cx("container")}>{children}</div>;
};
