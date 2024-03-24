import ModalContainer from "./ModalContainer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName: string;
}

const ModalEdit = ({ isOpen, onClose, selectedFolderName }: Props) => {
  const editContent = (
    <>
      <h2 className="title">폴더 이름 변경</h2>
      <input placeholder={selectedFolderName} className="modalInput" />
      <button className="blueButton">변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={editContent} />
  );
};
export default ModalEdit;
