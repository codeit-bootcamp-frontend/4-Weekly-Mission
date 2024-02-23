import styles from "./Add-folder.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function AddFolder({ handleMouseClick }) {
  return (
    <div className={cx("background")} onClick={handleMouseClick}>
      <div className={cx("modal")}>
        <img
          className={cx("closeImg")}
          src="images/close.png"
          alt="close"
          onClick={handleMouseClick}
        />
        <h2 className={cx("header")}>폴더 추가</h2>
        <form className={cx("form")}>
          <input className={cx("input")} placeholder="내용 입력"></input>
          <button className={cx("button")}>추가하기</button>
        </form>
      </div>
    </div>
  );
}
