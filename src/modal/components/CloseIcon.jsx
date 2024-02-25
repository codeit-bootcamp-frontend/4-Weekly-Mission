import styles from "../styles/CloseIcon.module.css";
import CloseIconImage from "../images/close.svg";

export default function CloseIcon({ handleOnClickClose }) {
  return (
    <img
      className={styles["close-icon"]}
      src={CloseIconImage}
      alt="닫기 아이콘"
      onClick={handleOnClickClose}
    />
  );
}
