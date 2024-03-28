import styles from './ShareModal.module.scss';
import classNames from 'classnames/bind';
import Modal from '@/components/modal/Modal';
import ModalContentBox from '@/components/modal/content/contentBox/ModalContentBox';
import ModalContentDescription from '@/components/modal/content/contentDescription/ModalContentDescription';
import ModalContentTitle from '@/components/modal/content/contentTitle/ModalContentTitle';
import { KeyboardEventHandler } from 'react';
import Image from 'next/image';

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

const ShareModal = ({
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
          <div className={cx('modal-header')}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx('modal-content')}>
            <button className={cx('button')} onClick={onKakaoClick}>
              <Image src="/images/kakao.svg" alt="카카오톡" width={42} height={42} />
              <span>카카오톡</span>
            </button>
            <button className={cx('button')} onClick={onFacebookClick}>
              <Image src="/images/facebook.svg" alt="페이스북" width={42} height={42} />
              <span>페이스북</span>
            </button>
            <button className={cx('button')} onClick={onLinkCopyClick}>
              <Image src="/images/link.svg" alt="링크 복사" width={42} height={42} />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

export default ShareModal;
