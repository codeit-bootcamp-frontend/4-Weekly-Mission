import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";

function ModalBasic({ modalName, modalContent }) {
  return (
    <>
      <ModalHeader
        modalHeaderName={`폴더 ${modalName}`}
        modalHeaderContent={modalContent}
      />
      <ModalMain />
    </>
  );
}

export default ModalBasic;
