import Title from './title/Title';
import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';

const DeleteFolder = ({ selectedFolder, handleCloseModal }) => (
  <Frame handleCloseModal={handleCloseModal}>
    <Title title="폴더삭제" content={selectedFolder} />
    <SubmitButton className="red" content="삭제하기" />
  </Frame>
);

export default DeleteFolder;
