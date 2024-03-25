import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from 'react';


interface IconAndTextButtonProps {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const cx = classNames.bind(styles);

export const IconAndTextButton = ({ iconSource, text, onClick }: IconAndTextButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
