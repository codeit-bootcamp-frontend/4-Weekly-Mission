import ModalContainer from "./ModalContainer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentMenu: string;
}

const ModalDeleteFolder = ({ isOpen, onClose, currentMenu }: Props) => {
  const deleteFolderContent = (
    <>
      <h2 className="title">폴더 삭제</h2>
      <p>{currentMenu}</p>
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
