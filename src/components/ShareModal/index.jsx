import { Modal } from "components/Modal";
import { forwardRef } from "react";
import styles from "./styles.module.css";
import kakaoIcon from "assets/kakaoIcon.svg";
import facebookIcon from "assets/facebookIcon.svg";
import linkIcon from "assets/linkIcon.svg";

export const ShareModal = forwardRef(
  ({ openModal, handleModalClose, folderName }, ref) => {
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
              <button>
                <img src={facebookIcon} alt="facebookIcon" />
                <p className={styles.iconText}>페이스북</p>
              </button>
            </li>
            <li className={styles.icon}>
              <button>
                <img src={linkIcon} alt="linkIcon" />
                <p className={styles.iconText}>링크공유</p>
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    );
  }
);
