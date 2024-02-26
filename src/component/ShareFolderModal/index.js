import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalBackground, ModalBox } from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton } from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";

const HOST_URL = window.location.host;

const ShareFolderModal = ({ setShareFolderModalOpen, selectedFolder }) => {
  const closeModal = () => {
    setShareFolderModalOpen(false);
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          icon={faXmark}
          className="ModalX"
          onClick={closeModal}
        />

        <p>폴더 공유</p>
        <p className="folderName">{selectedFolder.name}</p>
        <div className="linkIcons">
          <div className="linkIcon">
            <div className="kakao" />
            <p>카카오톡</p>
          </div>
          <FacebookShareButton url={`${HOST_URL}/shared/${selectedFolder.id}`}>
            <div className="linkIcon">
              <div className="facebook" />
              <p>페이스북</p>
            </div>
          </FacebookShareButton>
          <CopyToClipboard
            text={`${HOST_URL}/shared/${selectedFolder.id}`}
            onCopy={() => alert(`복사 완료`)}
          >
            <div className="linkIcon">
              <div className="copyLink" />
              <p>링크 복사</p>
            </div>
          </CopyToClipboard>
        </div>
      </ModalBox>
    </ModalBackground>
  );
};

export default ShareFolderModal;
