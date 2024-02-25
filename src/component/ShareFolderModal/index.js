import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalBackground, ModalBox } from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
            <button className="kakao" />
            <p>카카오톡</p>
          </div>
          <div className="linkIcon">
            <button className="facebook" />
            <p>페이스북</p>
          </div>
          <div className="linkIcon">
            <button className="copyLink" />
            <p>링크 복사</p>
          </div>
        </div>
      </ModalBox>
    </ModalBackground>
  );
};

export default ShareFolderModal;
