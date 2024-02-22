import ModalContainer from "./ModalContainer";

const ModalAddToFolder = ({ isOpen, onClose, url }) => {
  const addFolderContent = (
    <>
      <h2>폴더에 추가</h2>
      <p>{url}</p>
      <button className="blueButton">추가하기</button>
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
export default ModalAddToFolder;
