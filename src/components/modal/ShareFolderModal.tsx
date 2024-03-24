import closeIcon from '../../assets/icons/close.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import linkIcon from '../../assets/images/link.svg';
import KakaoShare from '../../utils/KakaoShare';

interface ShareFolderModalProps {
  data: {
    name: string;
    id: string;
  };
  closeModal: () => void;
}

const ShareFolderModal = ({ data, closeModal }: ShareFolderModalProps) => {
  const BASE_URL = 'http://localhost:3000';

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}/shared/${data.id}`,
      '페이스북 공유하기',
      'width=600,height=800,location=no,status=no,scrollbars=yes'
    );
  };

  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">폴더 공유</h2>
        <h3 className="modal-sub-text">{data.name}</h3>
      </div>
      <div className="sns-box">
        <KakaoShare folderId={data.id} />
        <div className="icon-box" onClick={handleFacebookShare}>
          <div id="facebook-icon">
            <img src={facebookIcon} alt="facebook" />
          </div>
          페이스북
        </div>
        <div className="icon-box" onClick={() => handleCopyClipBoard(`${BASE_URL}/shared`)}>
          <div id="link-icon">
            <img src={linkIcon} alt="link" />
          </div>
          링크복사
        </div>
      </div>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} alt="close-icon" />
      </button>
    </>
  );
};
export default ShareFolderModal;
