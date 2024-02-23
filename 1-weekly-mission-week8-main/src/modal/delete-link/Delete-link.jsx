import styles from "./Delete-link.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const DeleteLink = ({ url, handleMouseClick }) => {
  return (
    <div className={cx("container")} onClick={handleMouseClick}>
      <form className={cx("box")}>
        <img
          src={"/images/_close.svg"}
          alt={"닫기 이미지"}
          onClick={handleMouseClick}
        />
        <p className={cx("label")}>링크 삭제</p>
        <p className={cx("props")}>{url}</p>
        <button className={cx("deleteButton")}>삭제하기</button>
      </form>
    </div>
  );
};
