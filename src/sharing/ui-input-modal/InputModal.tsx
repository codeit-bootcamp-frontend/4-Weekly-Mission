import { ModalButton } from "@/types/modalButton";
import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import { Input } from "sharing/ui-input";
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentButton } from "sharing/ui-modal-content-button";
import { ModalContentTitle } from "sharing/ui-modal-content-title";
import { InputProps } from "@/types/inputProps";

const cx = classNames.bind(styles);

// 두가지 인터페이스를 가져오고 싶은데 이렇게 하는건 아닌거 같은데 일단 작업
interface InputModalProps extends ModalButton, InputProps {}

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}: InputModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
