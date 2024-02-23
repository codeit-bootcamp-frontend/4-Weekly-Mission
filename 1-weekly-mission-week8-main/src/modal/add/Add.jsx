import styles from "./Add.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Add({ handleMouseClick, folders, isValue }) {
  return (
    <div className={cx("background")} onClick={handleMouseClick}>
      <div className={cx("addModal")}>
        <img
          className={cx("closeImg")}
          src="images/close.png"
          alt="close"
          onClick={handleMouseClick}
        />
        <h2 className={cx("header")}>폴더에 추가</h2>
        <div className={cx("inputValue")}>{isValue || "링크 주소 "}</div>
        <div className={cx("folderContainer")}>
          {folders.map((folders) => {
            return (
              <div className={cx("folderName")}>
                {folders.name}{" "}
                <span className="description">{folders.link.count}개 링크</span>
              </div>
            );
          })}
        </div>
        <form className={cx("form")}>
          <button className={cx("button")}>추가하기</button>
        </form>
      </div>
    </div>
  );
}
