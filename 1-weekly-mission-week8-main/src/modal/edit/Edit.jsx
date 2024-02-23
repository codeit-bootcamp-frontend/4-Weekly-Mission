import styles from "./Edit.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Edit({ handleMouseClick, folderName }) {
  return (
    <div className={cx("background")} onClick={handleMouseClick}>
      <div className={cx("modal")}>
        <img
          className={cx("closeImg")}
          src="images/close.png"
          alt="close"
          onClick={handleMouseClick}
        />
        <h2 className={cx("header")}>폴더 이름 변경</h2>
        <form className={cx("form")}>
          <input className={cx("input")} placeholder={folderName}></input>
          <button className={cx("button")}>변경하기</button>
        </form>
      </div>
    </div>
  );
}
