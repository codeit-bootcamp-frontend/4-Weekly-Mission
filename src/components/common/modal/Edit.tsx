import { OnCloseModal } from '../../../types/onCloseModal';
import FolderNameInput from './folderNameInput/folderNameInput';
import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';
import Title from './title/Title';

interface EditProps extends OnCloseModal {
  // 기본값이 존재할 때 옵셔널을 부여해하나요?
  selectedFolderName?: string;
}

const Edit = ({ onCloseModal, selectedFolderName = '' }: EditProps) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title="폴더 이름 변경" />
    <FolderNameInput folderName={selectedFolderName} />
    <SubmitButton className="gradient" content="변경하기" />
  </Frame>
);

export default Edit;
