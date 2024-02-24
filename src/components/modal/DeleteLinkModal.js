import ModalWrapper from './ModalWrapper';
import DeleteModalButton from './DeleteButton';
import styles from './DeleteLinkModal.module.css';

export default function DeleteLinkModal({ handleDeleteLinkModalClick, url }) {
  return (
    <ModalWrapper>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-main-wrapper']}>
          <div className={styles['modal-title']}>링크 삭제</div>
          <div className={styles['modal-link-url']}>{url}</div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
            className={styles['modal-close-icon']}
            alt='modal-close-icon'
            onClick={handleDeleteLinkModalClick}
          />
        </div>
        <DeleteModalButton>삭제하기</DeleteModalButton>
      </div>
    </ModalWrapper>
  );
}
