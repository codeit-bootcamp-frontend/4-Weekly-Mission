import styles from './AlertModal.module.scss';
import classNames from 'classnames/bind';
import Modal from '@/components/modal/Modal';
import ModalContentBox from '@/components/modal/content/contentBox/ModalContentBox';
import ModalContentButton from '@/components/modal/content/contentButton/ModalContentButton';
import ModalContentDescription from '@/components/modal/content/contentDescription/ModalContentDescription';
import ModalContentTitle from '@/components/modal/content/contentTitle/ModalContentTitle';

type AlertModalType = {
  isOpen: boolean;
  title: string;
  description: string | undefined;
  buttonText: string;
  onClick?: () => void;
  onCloseClick: () => void;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

const cx = classNames.bind(styles);

const AlertModal: React.FC<AlertModalType> = ({
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
          <div className={cx('modal-header')}>
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

export default AlertModal;
