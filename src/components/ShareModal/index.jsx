import { Modal } from "components/Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";
import kakaoIcon from "assets/kakaoIcon.svg";
import facebookIcon from "assets/facebookIcon.svg";
import linkIcon from "assets/linkIcon.svg";

export const ShareModal = forwardRef(
  ({ openModal, handleModalClose, folderName }, ref) => {
    const handleCopyClipBoard = (text) => {
      try {
        navigator.clipboard.writeText(text);
        alert("클립보드에 복사되었습니다.");
      } catch (error) {
        alert("클립보드 복사에 실패하였습니다.");
      }
    };

    return (
      <Modal
        modalRef={ref}
        openModal={openModal}
        handleModalClose={handleModalClose}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>폴더 공유</h2>
          <p className={styles.description}>{folderName}</p>
          <ul className={styles.icons}>
            <li className={styles.icon}>
              <button>
                <img src={kakaoIcon} alt="kakaoIcon" />
                <p className={styles.iconText}>카카오톡</p>
              </button>
            </li>
            <li className={styles.icon}>
              <a
                target="_blank"
                href={`https://www.facebook.com/sharer.php?u=http://${
                  window.location.host
                }/shared?user=${1}&folderId=${441}`}
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="facebookIcon" />
                <p className={styles.iconText}>페이스북</p>
              </a>
            </li>
            <li className={styles.icon}>
              <button
                onClick={() =>
                  handleCopyClipBoard(
                    `${window.location.host}/shared?user=${1}&folderId=${441}`
                  )
                }
              >
                <img src={linkIcon} alt="linkIcon" />
                <p className={styles.iconText}>링크 복사</p>
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    );
  }
);
