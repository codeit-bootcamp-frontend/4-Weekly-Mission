import ModalBackgroundDim from './ModalBackgroundDim';
import kakao from '../../../images/Kakao.svg';
import facebook from '../../../images/Facebook_2.svg';
import shareLink from '../../../images/link2.svg';
import './ShareFolderModal.css';

export default function ShareFolderModal({ selectedFolderName, selectedFolderId, onClose }) {
  const shareUrl = `http://localhost:3000/shared/${selectedFolderId}`;

  const handleCopyUrl = () => {
    const urlToCopy = shareUrl;
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        alert('URL이 복사되었습니다.');
      })
      .catch(err => {
        console.error('복사 중 오류 발생:', err);
      });
  };

  return (
    <>
      <ModalBackgroundDim />
      <div className="shareModalContainer">
        <div className="shareModalContent">
          <div className="shareModalTitle">
            <p>폴더 공유</p>
            <p>{selectedFolderName}</p>
          </div>
          <div className="shareTypeList">
            <div className="shareType">
              <div className="shareKakao">
                <img src={kakao} alt="카카오톡" />
              </div>
              <p>카카오톡</p>
            </div>
            <div className="shareType">
              <div className="shareFacebook">
                <img src={facebook} alt="페이스북" />
              </div>
              <p>페이스북</p>
            </div>
            <div className="shareType">
              <div className="shareCopyLink" onClick={handleCopyUrl}>
                <img src={shareLink} alt="링크복사" />
              </div>
              <p>링크 복사</p>
            </div>
          </div>
        </div>
        <button className="modalCloseButton" onClick={onClose}>
          <img src="https://weekly-mission-week9.vercel.app/images/close.svg" alt="close" />
        </button>
      </div>
    </>
  );
}
