import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CardList = ({ children }) => {
  return <div className={cx("container")}>{children}</div>;
};
