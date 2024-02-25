import ModalShareBtns from "./ModalShareBtns";

function ModalMain({ modalInput, modalBtn, modalSnsBtn }) {
  return (
    <div>
      {modalInput && <input placeholder={modalInput} />}
      {modalSnsBtn && <ModalShareBtns />}
      {modalBtn && <button>{modalBtn}</button>}
    </div>
  );
}

export default ModalMain;
