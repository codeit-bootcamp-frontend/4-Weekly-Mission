import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const IconAndTextButton = ({ iconSource, text }) => {
  return (
    <button className={cx("container")}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
