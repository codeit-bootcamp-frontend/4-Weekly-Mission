import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { Portal } from "sharing/ui-portal";
import { ReactNode, MouseEventHandler, KeyboardEventHandler } from "react";

const cx = classNames.bind(styles);
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}
export const Modal = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: ModalProps) => {
  const handleBackdropClick = (event: any) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event: any) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx("container", { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
