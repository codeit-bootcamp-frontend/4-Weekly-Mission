import ModalContainer from "./ModalContainer";

const ModalDeleteFolder = ({ isOpen, onClose, selectedFolderName }) => {
  const deleteFolderContent = (
    <>
      <h2>폴더 삭제</h2>
      <p>{selectedFolderName}</p>
      <button className="redButton">삭제하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={deleteFolderContent}
    />
  );
};
export default ModalDeleteFolder;
