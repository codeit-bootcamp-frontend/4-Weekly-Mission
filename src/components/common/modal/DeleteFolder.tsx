import Title from './title/Title';
import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';

interface DeleteFolder {
  selectedFolderName: string;
  onCloseModal: () => void;
}

const DeleteFolder = ({ selectedFolderName, onCloseModal }: DeleteFolder) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title="폴더삭제" content={selectedFolderName} />
    <SubmitButton className="red" content="삭제하기" />
  </Frame>
);

export default DeleteFolder;
