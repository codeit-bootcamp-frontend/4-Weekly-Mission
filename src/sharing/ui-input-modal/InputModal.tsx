import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import { Input } from "../../sharing/ui-input";
import { Modal } from "../../sharing/ui-modal";
import { ModalContentBox } from "../../sharing/ui-modal-content-box";
import { ModalContentButton } from "../../sharing/ui-modal-content-button";
import { ModalContentTitle } from "../../sharing/ui-modal-content-title";
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler  } from 'react';

interface InputModalProps {
  isOpen: boolean;
  title: string;
  placeholder?: string; 
  buttonText: string;
  onCloseClick: () => void; 
  onKeyDown: KeyboardEventHandler<HTMLDivElement>; 
  value: string; 
  onChange: ChangeEventHandler<HTMLInputElement>; 
  onButtonClick: MouseEventHandler<HTMLButtonElement>; 
}

const cx = classNames.bind(styles);

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
  onButtonClick,
}: InputModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input value={value} onChange={onChange} placeholder={placeholder} />
            <ModalContentButton onClick={onButtonClick}>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
