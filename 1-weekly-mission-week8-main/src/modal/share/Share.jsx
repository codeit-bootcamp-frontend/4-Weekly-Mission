import styles from "./Share.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Share({ handleMouseClick, folder }) {
  const handleLinkClick = async () => {
    await navigator.clipboard.writeText(folder?.link);
  };

  const handleFacebookClick = () => {
    const sendUrl = `https://bootcamp-api.codeit.kr/shared/${folder?.id}`;
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
  };

  const handleKakaoClick = () => {
    return;
  };

  return (
    <div className={cx("background")} onClick={handleMouseClick}>
      <div className={cx("modal")}>
        <img
          className={cx("closeImg")}
          src="images/close.png"
          alt="close"
          onClick={handleMouseClick}
        />
        <div className={cx("folderProfile")}>
          <h2 className={cx("header")}>폴더 공유</h2>
          <p className={cx("folderName")}>{folder?.name}</p>
        </div>

        <div className={cx("links")}>
          <div className={cx("link")} onClick={handleKakaoClick}>
            <img src="images/kakao.png" alt="kakao" />
            <p>카카오톡</p>
          </div>
          <div className={cx("link")} onClick={handleFacebookClick}>
            <img src="images/facebook2.png" alt="facebook" />
            <p>페이스북</p>
          </div>
          <div className={cx("link")} onClick={handleLinkClick}>
            <img src="images/link2.png" alt="link" />
            <p>링크 복사</p>
          </div>
        </div>
      </div>
    </div>
  );
}
