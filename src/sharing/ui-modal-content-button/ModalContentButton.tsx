import { ReactNode } from "react";
import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

interface Props {
  children: ReactNode;
  // onClick: any;
  themeColor: string;
}

const cx = classNames.bind(styles);

export const ModalContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: Props) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
