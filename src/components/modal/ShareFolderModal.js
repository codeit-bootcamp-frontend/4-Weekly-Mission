import styles from './ShareFolderModal.module.css';
import ModalWrapper from './ModalWrapper';

export default function ShareFolderModal({
  handleShareFolderModalClick,
  FolderModalValue,
  ShareUrlFolderId,
}) {
  return (
    <ModalWrapper>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-main-wrapper']}>
          <div className={styles['modal-title']}>폴더 공유</div>
          <div className={styles['modal-folder-name']}>{FolderModalValue}</div>
        </div>

        <div className={styles['share-url-wrapper']}>
          <div className={styles['share-url-item']}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/share_url_kakao_talk_icon.svg`}
            />
            <p>카카오톡</p>
          </div>
          <div className={styles['share-url-item']}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/share_url_facebook_icon.svg`}
            />
            <p>페이스북</p>
          </div>

          <div className={styles['share-url-item']}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/share_url_copy_url_icon.svg`}
              onClick={() => {
                window.navigator.clipboard
                  .writeText(
                    window.location.host + '/shared/' + ShareUrlFolderId
                  )
                  .then(() => {
                    alert('복사완료');
                  });
              }}
            />
            <p>링크 복사</p>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
          className={styles['modal-close-icon']}
          alt='modal-close-icon'
          onClick={handleShareFolderModalClick}
        />
      </div>
    </ModalWrapper>
  );
}
