import { FacebookIcon, FacebookShareButton } from "react-share";
import styles from "./Modal.module.css";
import CopyToClipboard from "react-copy-to-clipboard";

const currentUrl = "https://weekly-mission-week9.vercel.app/shared";

function ShareFolder({ currentCategory, selectedId }) {
  return (
    <>
      <div className={styles["ModalTitle"]}>폴더 공유</div>
      <div className={styles["ModalSubtitle"]}>{currentCategory}</div>
      <div className={styles["shareIcons"]}>
        <div className={styles["icon-wrapper"]}>
          <button>
            <img
              src="images/kakaotalk-icon.svg"
              alt="카카오톡으로 공유하기"
              className={styles["icons"]}
            />
          </button>
          <span>카카오톡</span>
        </div>
        <div className={styles["icon-wrapper"]}>
          <FacebookShareButton url={`${currentUrl}${selectedId}`}>
            <FacebookIcon
              size={30}
              round={true}
              borderRadius={24}
            ></FacebookIcon>
          </FacebookShareButton>
          <span>페이스북</span>
        </div>
        <div className={styles["icon-wrapper"]}>
          <CopyToClipboard
            text={`${currentUrl}${selectedId}`}
            onCopy={() => alert("클립보드에 복사되었습니다")}
          >
            <img
              src="images/copylink-icon.svg"
              alt="링크 복사"
              className={styles["icons"]}
            />
          </CopyToClipboard>
          <span>링크 복사</span>
        </div>
      </div>
    </>
  );
}

export default ShareFolder;
