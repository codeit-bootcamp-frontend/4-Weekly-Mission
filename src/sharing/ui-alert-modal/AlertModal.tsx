import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "../../sharing/ui-modal";
import { ModalContentBox } from "../../sharing/ui-modal-content-box";
import { ModalContentButton } from "../../sharing/ui-modal-content-button";
import { ModalContentDescription } from "../../sharing/ui-modal-content-description";
import { ModalContentTitle } from "../../sharing/ui-modal-content-title";
import { ChangeEvent, MouseEventHandler, ReactNode } from "react";

const cx = classNames.bind(styles);

interface Props {
  isOpen: boolean;
  title: string;
  description: string | null;
  buttonText: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: (e: ChangeEvent) => void;
}

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: Props) => {
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
