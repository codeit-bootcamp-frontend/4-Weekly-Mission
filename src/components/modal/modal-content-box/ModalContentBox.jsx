import styles from "./ModalContentBox.module.scss";
import classNames from "classnames/bind";
import Icon from "../../../assets/image/close.svg";

const cx = classNames.bind(styles);

export const ModalContentBox = ({ header, content, onCloseClick }) => {
  return (
    <div className={cx("container")}>
      <div onClick={onCloseClick}>
        <img className={cx("close")} src={Icon} alt="x모양 닫기버튼" />
      </div>
      <div className={cx("items")}>
        {header}
        {content}
      </div>
    </div>
  );
};
