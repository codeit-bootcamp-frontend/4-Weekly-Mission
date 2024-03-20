import styles from './AddFolderModal.module.css';
import ModalButton from '../ModalButton/ModalButton';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

export default function AddFolderModal({ handleAddFolderModalClick }) {
  return (
    <ModalWrapper>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-main-wrapper']}>
          <div className={styles['modal-title']}>폴더 추가</div>
          <input className={styles['modal-input']} placeholder='내용 입력' />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
            className={styles['modal-close-icon']}
            alt='modal-close-icon'
            onClick={handleAddFolderModalClick}
          />
        </div>
        <ModalButton>추가하기</ModalButton>
      </div>
    </ModalWrapper>
  );
}
