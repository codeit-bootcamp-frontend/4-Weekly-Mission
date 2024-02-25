import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalBackground, ModalBox } from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeleteLinkModal = ({ url, setDeleteLinkModalOpen }) => {
  const closeModal = (e) => {
    setDeleteLinkModalOpen(false);
    e.preventDefault();
  };

  const handleEvent = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalBox onClick={handleEvent}>
        <FontAwesomeIcon
          icon={faXmark}
          className="ModalX"
          onClick={closeModal}
        />

        <p>링크 삭제</p>
        <p className="folderName">{url}</p>
        <button onClick={closeModal}>삭제하기</button>
      </ModalBox>
    </ModalBackground>
  );
};

export default DeleteLinkModal;
