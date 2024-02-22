import ModalWrapper from "../ModalWrapper";
import "./style.css";

export default function ShareModal({ onClose, folder }) {
  return (
    <>
      <ModalWrapper onClose={onClose} title="폴더 공유" info={folder?.name}>
        <div className="share-options">
          <div className="share-option">
            <img src="images/kakao-share.svg" alt="kakao" />
            <span>카카오톡</span>
          </div>
          <div className="share-option">
            <img src="images/facebook-share.svg" alt="facebook" />
            <span>페이스북</span>
          </div>
          <div className="share-option">
            <img src="images/link-share.svg" alt="link" />
            <span>링크 복사</span>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
}
