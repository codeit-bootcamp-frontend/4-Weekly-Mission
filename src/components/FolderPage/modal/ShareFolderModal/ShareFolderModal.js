import styles from './ShareFolderModal.module.css';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { useEffect } from 'react';

export default function ShareFolderModal({
  handleShareFolderModalClick,
  FolderModalValue,
  ShareUrlFolderId,
}) {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('9adbb4d8d436041f3eeadb2a25b525ec');
    console.log(Kakao.isInitialized());
  });
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: '링크를 공유해보세요',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/share_url_copy_url_icon.svg`,
        link: {
          mobileWebUrl: window.location.host + '/shared/' + ShareUrlFolderId,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: window.location.host + '/shared/' + ShareUrlFolderId,
          },
        },
      ],
    });
  };

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
              alt='kakao-talk-shared-icon'
              onClick={shareKakao}
            />
            <p>카카오톡</p>
          </div>
          <div className={styles['share-url-item']}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/share_url_facebook_icon.svg`}
              alt='face-book-shared-icon'
              onClick={() => {
                window.open(
                  'https://twitter.com/intent/tweet?text=' +
                    window.location.host +
                    '/shared/' +
                    ShareUrlFolderId
                );
              }}
            />
            <p>페이스북</p>
          </div>

          <div className={styles['share-url-item']}>
            <img
              alt='share-url-icon'
              src={`${process.env.PUBLIC_URL}/assets/images/share_url_copy_url_icon.svg`}
              onClick={() => {
                window.navigator.clipboard
                  .writeText(
                    window.location.host + '/shared/' + ShareUrlFolderId
                  )
                  .then(() => {
                    alert('링크 복사완료');
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
