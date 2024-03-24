import { MouseEventHandler } from "react";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  iconSource: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const IconAndTextButton = ({ iconSource, text, onClick }: Props) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
