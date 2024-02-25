import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";
import modalCloseBtn from "../../img/modalCloseBtn.svg";

function ModalBasic({
  modalName,
  modalContent,
  modalInput,
  modalBtn,
  modalSnsBtn,
}) {
  return (
    <>
      <button>
        <img src={modalCloseBtn} alt="closeButton" />
      </button>
      <ModalHeader
        modalHeaderName={`폴더 ${modalName}`}
        modalHeaderContent={modalContent}
      />
      <ModalMain
        modalInput={modalInput}
        modalBtn={modalBtn}
        modalSnsBtn={modalSnsBtn}
      />
    </>
  );
}

export default ModalBasic;
