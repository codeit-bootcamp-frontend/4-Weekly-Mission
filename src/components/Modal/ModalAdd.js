import ModalContainer from "./ModalContainer";

const ModalAdd = ({ isOpen, onClose }) => {
  const addContent = (
    <>
      <h2>폴더 추가</h2>
      <input placeholder="내용 입력"></input>
      <button>추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addContent} />
  );
};
export default ModalAdd;
