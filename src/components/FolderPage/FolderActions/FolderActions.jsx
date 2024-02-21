import DeleteIcon from '../../icons/DeleteIcon';
import ShareIcon from '../../icons/ShareIcon';
import EditIcon from '../../icons/EditIcon';
import { IconContainer } from './folderActionsStyle';

const FolderActions = () => (
  <IconContainer>
    <DeleteIcon text="삭제" />
    <EditIcon text="이름 변경" />
    <ShareIcon text="공유" />
  </IconContainer>
);

export default FolderActions;
