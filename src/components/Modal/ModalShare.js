import kakao from "../../assets/kakao.svg";
import facebook from "../../assets/facebook.svg";
import link from "../../assets/linkIconModal.svg";
import ModalContainer from "./ModalContainer";
import useClipboard from "../../hooks/useClipboard";
import useKakaoShare from "../../hooks/useKakaoShare";
import useFacebookShare from "../../hooks/useFacebookShare";
import "./ModalShare.css";

const ModalShareContent = ({ selectedFolderName, copied, handleKakaoShare, handleFacebookShare, handleCopyToClipboard }) => {
  return (
    <>
      <h2>폴더 공유</h2>
      <p>{selectedFolderName}</p>
      <div className="socialButtonContainer">
        <div>
          <img src={kakao} alt="kakao" onClick={handleKakaoShare} />
          카카오톡
        </div>
        <div>
          <img src={facebook} alt="facebook" onClick={handleFacebookShare} />
          페이스북
        </div>
        <div>
          <img src={link} alt="link" onClick={handleCopyToClipboard} />
          {copied ? "복사 완료" : "링크 복사"}
        </div>
      </div>
    </>
  );
};

const ModalShare = ({
  isOpen,
  onClose,
  selectedFolderName,
  selectedFolderId,
}) => {
  const { copied, copyToClipboard } = useClipboard();
  const { handleKakaoShare } = useKakaoShare(
    selectedFolderName,
    selectedFolderId
  );
  const { handleFacebookShare } = useFacebookShare(selectedFolderId);

  const folderShareLink = `${window.location.origin}/shared/${selectedFolderId}`;
  const handleCopyToClipboard = () => {
    copyToClipboard(folderShareLink);
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <ModalShareContent
        selectedFolderName={selectedFolderName}
        copied={copied}
        handleKakaoShare={handleKakaoShare}
        handleFacebookShare={handleFacebookShare}
        handleCopyToClipboard={handleCopyToClipboard}
      />
    </ModalContainer>
  );
};
export default ModalShare;
