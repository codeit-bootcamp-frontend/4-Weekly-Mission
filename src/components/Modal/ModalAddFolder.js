import ModalContainer from "./ModalContainer";

const ModalAddFolder = ({ isOpen, onClose }) => {
  const addFolderContent = (
    <>
      <h2>폴더에 추가 </h2>
      <input placeholder="내용 입력" className="modalInput"></input>
      <button>추가하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={addFolderContent}
    />
  );
};
export default ModalAddFolder;
