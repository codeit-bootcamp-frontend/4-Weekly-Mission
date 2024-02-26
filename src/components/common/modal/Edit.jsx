import FolderNameInput from './folderNameInput/folderNameInput';
import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';
import Title from './title/Title';

const Edit = ({ handleCloseModal, selectedFolder = '' }) => (
  <Frame handleCloseModal={handleCloseModal}>
    <Title title="폴더 이름 변경" />
    <FolderNameInput folderName={selectedFolder} />
    <SubmitButton className="gradient" content="변경하기" />
  </Frame>
);

export default Edit;
