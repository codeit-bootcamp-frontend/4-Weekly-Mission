import CopyToClipboard from 'react-copy-to-clipboard';
import { FacebookShareButton } from 'react-share';
import { useEffect } from 'react';
import Frame from './frame/Frame';
import Title from './title/Title';
import styles from './Share.module.css';
import kakaoUrl from '../../../assets/kakao.svg';
import facebookUrl from '../../../assets/facebook.svg';
import linkUrl from '../../../assets/link.svg';
import ShareBtn from './shareBtn/ShareBtn';
import { sampleUrl } from '../../../util/constants';
import { useScript } from '../../../util/hooks';

const Share = ({ currentFolderId, handleCloseModal, selectedFolder }) => {
  const url = `${sampleUrl}${currentFolderId}`;
  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('8f1f7e5843d6ce8bbd69bc426167fb9b');
      }
    }
  }, [status]);

  const handleKaKaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: url,
    });
  };

  return (
    <Frame handleCloseModal={handleCloseModal} selectedFolder={selectedFolder}>
      <Title title="폴더 공유" content={selectedFolder} />
      <ul className={styles.btnList}>
        <button onClick={handleKaKaoButton}>
          <ShareBtn name="카카오톡" imgUrl={kakaoUrl} backgroundColor="yellow" />
        </button>
        <FacebookShareButton url={url}>
          <ShareBtn name="페이스북" imgUrl={facebookUrl} backgroundColor="blue" />
        </FacebookShareButton>
        <CopyToClipboard text={url}>
          <button>
            <ShareBtn name="링크 복사" imgUrl={linkUrl} />
          </button>
        </CopyToClipboard>
      </ul>
    </Frame>
  );
};

export default Share;
