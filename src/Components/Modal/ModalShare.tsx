import kakao from "../../images/shareKakao.svg";
import facebook from "../../images/shareFacebook.svg";
import link from "../../images/shareLink.svg";
import ModalContainer from "./ModalContainer";
import { handleClipBoard } from "../../utils/handleClipBoard";
import { shareToFacebook } from "../../utils/shareToFacebook";
import { useKakaoShare } from "../../useHooks/useKakaoShare";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentMenu: string;
  currentFolderId: number;
}

const ModalShare = ({
  isOpen,
  onClose,
  currentMenu,
  currentFolderId,
}: Props) => {
  const { shareKakao } = useKakaoShare(currentFolderId);

  const urlBaseLink = "http://localhost:3000/shared/";
  const handleCopyLink = () => {
    handleClipBoard(`${urlBaseLink}${currentFolderId}`);
  };

  const shareContent = (
    <>
      <h2 className="title">폴더 공유</h2>
      <p>{currentMenu}</p>
      <div className="socialButtonContainer">
        <div className="snsButton" onClick={() => shareKakao()}>
          <img src={kakao} alt="kakao" />
          카카오톡
        </div>
        <div
          className="snsButton"
          onClick={() => {
            shareToFacebook(`${urlBaseLink}${currentFolderId}`);
          }}
        >
          <img src={facebook} alt="facebook" />
          페이스북
        </div>
        <div className="snsButton" onClick={handleCopyLink}>
          <img src={link} alt="link" />
          링크 복사
        </div>
      </div>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={shareContent} />
  );
};
export default ModalShare;
