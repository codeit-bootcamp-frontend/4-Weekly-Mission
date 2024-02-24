import styles from './DeleteFolderModal.module.css';
import ModalWrapper from './ModalWrapper';
import DeleteModalButton from './DeleteButton';
import Folder from '../../pages/Folder';

export default function DeleteFolderModal({
  FolderModalValue,
  handleDeleteFolderModalClick,
}) {
  return (
    <ModalWrapper>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-main-wrapper']}>
          <div className={styles['modal-title']}>폴더 삭제</div>
          <div className={styles['modal-folder-name']}>{FolderModalValue}</div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
            className={styles['modal-close-icon']}
            alt='modal-close-icon'
            onClick={handleDeleteFolderModalClick}
          />
        </div>
        <DeleteModalButton>삭제하기</DeleteModalButton>
      </div>
    </ModalWrapper>
  );
}
