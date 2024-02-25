import { useEffect } from 'react';
import kakaoShare from '../../assets/kakaoShare.png';
import facebookShare from '../../assets/facebookShare.png';
import linkShare from '../../assets/linkShare.png';
import style from '../../styles/modal/ShareModal.module.css';

function ShareModal({ data }) {
  const { name, id } = data;
  const { Kakao } = window;

  const shareUrl = `${window.location.origin}/shared/${id}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).catch((err) => {
      console.error('클립보드 복사에 실패했습니다.', err);
    });
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('a8781cd2ea84e6967254408b21b95759');
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'text',
      text: '세상에 모든 정보를 쉽게 저장하고 관리해보세요',
      link: {
        mobileWebUrl: 'http://localhost:3000/shared/114',
        webUrl: 'http://localhost:3000/shared/114',
      },
    });
  };

  const shareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookShareUrl, '_blank');
  };
  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>링크 삭제</div>
      <p className={style.modalData}>{name}</p>
      <div className={style.shareBox}>
        <img src={kakaoShare} alt="kakao" onClick={shareKakao} />
        <img src={facebookShare} alt="facebook" onClick={shareFacebook} />
        <img src={linkShare} alt="link" onClick={copyToClipboard} />
      </div>
    </div>
  );
}

export default ShareModal;
