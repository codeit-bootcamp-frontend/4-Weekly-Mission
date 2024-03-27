import ModalContainer from "./ModalContainer";

const ModalAddFolder = ({
  isOpen,
  onClose,
  selectedFolderName,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName?: string;
}) => {
  const addContent = (
    <>
      <h2 className="title">폴더 추가</h2>
      <input placeholder={selectedFolderName} className="modalInput" />
      <button className="blueButton">추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addContent} />
  );
};
export default ModalAddFolder;
