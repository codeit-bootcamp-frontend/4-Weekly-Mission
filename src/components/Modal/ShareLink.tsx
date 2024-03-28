import React from "react";
import Modal from "./Modal";
import ShareKakao from "./shareKakao";
import CopyToClipboard from "react-copy-to-clipboard";
import shareFacebook from "../../image/share_facebook.svg";
import shareLinkIcon from "../../image/share_link.svg";
import styles from "./shareLink.module.scss";

interface ShareLinkProps {
  isOpen: boolean;
  onClose: () => void;
  selectedName: string;
  folderId: number;
}

const ShareLink = ({
  isOpen,
  onClose,
  selectedName,
  folderId,
}: ShareLinkProps) => {
  const host = window.location.host;

  let shareLink = `${host}/shared?user=1&folder=${folderId}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} selectedName={selectedName}>
      <div className={styles.modalInner}>
        <div className={styles.modalText}>
          <h2 className={styles.modalTitle}>폴더 공유</h2>
          <p className={styles.selectedName}>{selectedName}</p>
        </div>
        <div className={styles.shareList}>
          <div className={styles.share}>
            <ShareKakao folderId={folderId} />
            <span>카카오톡</span>
          </div>

          <div className={styles.share}>
            <button
              className={styles.shareBtn}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`,
                  "페이스북 공유하기",
                  "width=600,height=800,location=no,status=no,scrollbars=yes"
                );
              }}
            >
              <img src={shareFacebook} alt="facebook btn" />
            </button>
            <span>페이스북</span>
          </div>

          <div className={styles.share}>
            <CopyToClipboard text={shareLink}>
              <button
                className={styles.shareBtn}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <img src={shareLinkIcon} alt="share btn" />
              </button>
            </CopyToClipboard>
            <span>링크 복사</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareLink;
