import ModalContainer from "./ModalContainer";

const ModalEdit = ({ isOpen, onClose }) => {
  const editContent = (
    <>
      <h2>폴더 이름 변경</h2>
      <input placeholder="유용한 팁" className="modalInput" />
      <button>변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={editContent} />
  );
};
export default ModalEdit;
