import ModalContainer from "./ModalContainer";

const ModalAddFolderContent = () => (
  <>
    <h2>폴더 추가</h2>
    <input placeholder="내용 입력" className="modalInput"></input>
    <button className="blueButton">추가하기</button>
  </>
);


const ModalAddFolder = ({ isOpen, onClose }) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} >
      <ModalAddFolderContent />
    </ModalContainer>
  );
};
export default ModalAddFolder;
