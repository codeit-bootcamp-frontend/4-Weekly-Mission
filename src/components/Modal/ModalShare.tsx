import kakao from '../../assets/kakao.svg';
import facebook from '../../assets/facebook.svg';
import link from '../../assets/linkIconModal.svg';
import ModalContainer from './ModalContainer';
import useClipboard from '../../hooks/useClipboard';
import useKakaoShare from '../../hooks/useKakaoShare';
import useFacebookShare from '../../hooks/useFacebookShare';
import './ModalShare.css';

interface ModalShareContentProps {
  selectedFolderName: string;
  copied: boolean;
  handleKakaoShare: () => void;
  handleFacebookShare: () => void;
  handleCopyToClipboard: () => void;
}

const ModalShareContent = ({
  selectedFolderName,
  copied,
  handleKakaoShare,
  handleFacebookShare,
  handleCopyToClipboard,
}: ModalShareContentProps) => {
  return (
    <>
      <h2>폴더 공유</h2>
      <p>{selectedFolderName}</p>
      <div className='socialButtonContainer'>
        <div onClick={handleKakaoShare}>
          <img src={kakao} alt='kakao' />
          카카오톡
        </div>
        <div onClick={handleFacebookShare}>
          <img src={facebook} alt='facebook' />
          페이스북
        </div>
        <div onClick={handleCopyToClipboard}>
          <img src={link} alt='link' />
          {copied ? '복사 완료' : '링크 복사'}
        </div>
      </div>
    </>
  );
};

interface ModalShareProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName: string;
  selectedFolderId: number;
}

const ModalShare = ({
  isOpen,
  onClose,
  selectedFolderName,
  selectedFolderId,
}: ModalShareProps) => {
  const { copied, copyToClipboard } = useClipboard();
  const { handleKakaoShare } = useKakaoShare(
    selectedFolderName,
    selectedFolderId
  );
  const { handleFacebookShare } = useFacebookShare(selectedFolderId);

  const handleCopyToClipboard = () => {
    const folderShareLink = `${window.location.origin}/shared/${selectedFolderId}`;
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
