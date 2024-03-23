import classNames from "classnames/bind";
import styles from "./InputModal.module.scss";
import { Modal } from "../Modal";
import { Input } from "../../input/Input";
import { ModalContentBox } from "../modal-content-box/ModalContentBox";
import { ModalContentButton } from "../modal-content-button/ModalContentButton";
import { ModalContentTitle } from "../modal-content-title/ModalContentTitle";

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
}) => {
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
