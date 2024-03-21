import ModalContainer from "./ModalContainer";

const ModalDeleteFolderContent = ({ selectedFolderName }) => (
  <>
    <h2>폴더 삭제</h2>
    <p>{selectedFolderName}</p>
    <button className="redButton">삭제하기</button>
  </>
);

const ModalDeleteFolder = ({ isOpen, onClose, selectedFolderName }) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}>
      <ModalDeleteFolderContent selectedFolderName={selectedFolderName} />
    </ModalContainer>
  );
};
export default ModalDeleteFolder;
