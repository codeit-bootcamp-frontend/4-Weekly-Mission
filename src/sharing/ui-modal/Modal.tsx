import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { Portal } from 'sharing/ui-portal';

const cx = classNames.bind(styles);

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Modal = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: ModalProps) => {
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event) => {
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
        className={cx('container', { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
