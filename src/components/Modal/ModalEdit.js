import ModalContainer from "./ModalContainer";

const ModalEditContent = ({ selectedFolderName }) => (
  <>
    <h2>폴더 이름 변경</h2>
    <input placeholder={selectedFolderName} className="modalInput"></input>
    <button className="blueButton">변경하기</button>
  </>
);

const ModalEdit = ({ isOpen, onClose, selectedFolderName }) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <ModalEditContent selectedFolderName={selectedFolderName} />
    </ModalContainer>
  );
};
export default ModalEdit;
