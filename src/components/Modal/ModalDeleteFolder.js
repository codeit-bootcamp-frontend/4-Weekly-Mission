import ModalContainer from "./ModalContainer";

const ModalDeleteFolder = ({ isOpen, onClose }) => {
  const deleteFolderContent = (
    <>
      <h2>폴더 삭제</h2>
      <p></p>
      <button>삭제하기</button>
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
