import styles from './AddLinkInFolder.module.css';
import ModalButton from '../ModalButton/ModalButton';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
export default function AddLinkInFolder({
  handleAddLinkInFolderModalClick,
  folderData,
  sharedUrl,
}) {
  return (
    <ModalWrapper>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-main-wrapper']}>
          <div className={styles['modal-title']}>폴더에 추가</div>
          <div className={styles['link-url']}>{sharedUrl}</div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
            className={styles['modal-close-icon']}
            alt='modal-close-icon'
            onClick={handleAddLinkInFolderModalClick}
          />
        </div>
        <ul className={styles['folder-list']}>
          {folderData?.data.map(({ name, link }, i) => {
            return (
              <li key={i} className={styles['list-item-wrapper']}>
                <p className={styles['folder-name']}>{name}</p>
                <p className={styles['link-count']}>
                  {link.count === 0 ? (
                    <div>링크가 없습니다</div>
                  ) : (
                    <div>{`${link.count}개 링크`}</div>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
        <ModalButton>추가하기</ModalButton>
      </div>
    </ModalWrapper>
  );
}
