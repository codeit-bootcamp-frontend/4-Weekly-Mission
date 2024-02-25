import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";

function ModalBasic({
  modalName,
  modalContent,
  modalInput,
  modalBtn,
  modalSnsBtn,
}) {
  return (
    <>
      {/* X버튼 추가 */}
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
