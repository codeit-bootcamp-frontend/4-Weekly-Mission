import styles from './RenameFolderNameModal.module.css';
import ModalWrapper from './ModalWrapper';
import ModalButton from './ModalButton';
export default function RenameFolderName({
  handleRenameFolderModalClick,
  renameFolderModalValue,
}) {
  return (
    <ModalWrapper>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-main-wrapper']}>
          <div className={styles['modal-title']}>폴더 이름 변경</div>
          <input
            className={styles['modal-input']}
            placeholder='내용 입력'
            value={renameFolderModalValue}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
            className={styles['modal-close-icon']}
            onClick={handleRenameFolderModalClick}
          />
        </div>
        <ModalButton>확인하기</ModalButton>
      </div>
    </ModalWrapper>
  );
}
