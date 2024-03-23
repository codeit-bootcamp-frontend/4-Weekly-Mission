import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentDescription } from "sharing/ui-modal-content-description";
import { ModalContentTitle } from "sharing/ui-modal-content-title";
import { ReactComponent as KakaoIcon } from "./kakao.svg";
import { ReactComponent as FacebookIcon } from "./facebook.svg";
import { ReactComponent as LinkIcon } from "./link.svg";
import { KeyboardEventHandler } from "react";

type ShareModalType = {
  isOpen: boolean;
  folderName: string | undefined;
  onKakaoClick: () => void;
  onFacebookClick: () => void;
  onLinkCopyClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

const cx = classNames.bind(styles);

export const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}: ShareModalType) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button className={cx("button")} onClick={onKakaoClick}>
              <KakaoIcon />
              <span>카카오톡</span>
            </button>
            <button className={cx("button")} onClick={onFacebookClick}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button className={cx("button")} onClick={onLinkCopyClick}>
              <LinkIcon />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
