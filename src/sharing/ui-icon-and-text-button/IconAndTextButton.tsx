import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";

type IconAndTextButtonType = {
  iconSource: string;
  text?: string;
  onClick: () => void;
};

const cx = classNames.bind(styles);

export const IconAndTextButton = ({
  iconSource,
  text,
  onClick,
}: IconAndTextButtonType) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
