import ModalContainer from './ModalContainer';

interface ModalDeleteFolderProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName: string;
}

const ModalDeleteFolderContent = ({
  selectedFolderName,
}: {
  selectedFolderName: string;
}) => (
  <>
    <h2>폴더 삭제</h2>
    <p>{selectedFolderName}</p>
    <button className='redButton'>삭제하기</button>
  </>
);

const ModalDeleteFolder = ({
  isOpen,
  onClose,
  selectedFolderName,
}: ModalDeleteFolderProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <ModalDeleteFolderContent selectedFolderName={selectedFolderName} />
    </ModalContainer>
  );
};
export default ModalDeleteFolder;
