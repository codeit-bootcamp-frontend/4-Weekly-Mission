import CopyToClipboard from 'react-copy-to-clipboard';
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
import { OnCloseModal } from '../../../types/onCloseModal';

interface ShareProps extends OnCloseModal {
  selectedFolderId: number | string;
  selectedFolderName: string;
}

const Share = ({ selectedFolderId, onCloseModal, selectedFolderName }: ShareProps) => {
  const url = `${sampleUrl}${selectedFolderId}`;
  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  useEffect(() => {
    if (status === 'ready' && (window as any).Kakao) {
      if (!(window as any).Kakao.isInitialized()) {
        (window as any).Kakao.init('8f1f7e5843d6ce8bbd69bc426167fb9b');
      }
    }
  }, [status]);

  const handleKaKaoButton = () => {
    (window as any).Kakao.Link.sendScrap({
      requestUrl: url
    });
  };

  return (
    <Frame onCloseModal={onCloseModal}>
      <Title title="폴더 공유" content={selectedFolderName} />
      <ul className={styles.btnList}>
        <button onClick={handleKaKaoButton}>
          <ShareBtn name="카카오톡" imgUrl={kakaoUrl} backgroundColor="yellow" />
        </button>
        <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)}>
          <ShareBtn name="페이스북" imgUrl={facebookUrl} backgroundColor="blue" />
        </button>
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
