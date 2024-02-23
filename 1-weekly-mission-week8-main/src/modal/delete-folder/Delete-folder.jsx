import styles from "./Delete-folder.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const DeleteFolder = ({ folderName, handleMouseClick }) => {
  return (
    <div className={cx("container")} onClick={handleMouseClick}>
      <form className={cx("box")}>
        <img
          src={"/images/_close.svg"}
          alt={"삭제 이미지"}
          onClick={handleMouseClick}
        />
        <p className={cx("label")}>폴더 삭제</p>
        <p className={cx("props")}>{folderName}</p>
        <button className={cx("deleteFolderButton")}>삭제하기</button>
      </form>
    </div>
  );
};
