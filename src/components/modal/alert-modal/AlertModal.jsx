import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "../Modal";
import { ModalContentDescription } from "../modal-content-description/ModalContentDescription";
import { ModalContentBox } from "../modal-content-box/ModalContentBox";
import { ModalContentTitle } from "../modal-content-title/ModalContentTitle";
import { ModalContentButton } from "../modal-content-button/ModalContentButton";
const cx = classNames.bind(styles);

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
