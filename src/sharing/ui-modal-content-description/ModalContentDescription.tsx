import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

type ModalContentDescriptionType = {
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

export const ModalContentDescription = ({
  children,
}: ModalContentDescriptionType) => {
  return <p className={cx("description")}>{children}</p>;
};
