import DeleteIcon from '../../icons/DeleteIcon';
import ShareIcon from '../../icons/ShareIcon';
import EditIcon from '../../icons/EditIcon';
import { IconContainer } from './folderActionsStyle';

const FolderActions = ({ onDelete, onRename, onShare }) => (
  <IconContainer>
    <DeleteIcon text="삭제" onClick={onDelete} />
    <EditIcon text="이름 변경" onClick={onRename} />
    <ShareIcon text="공유" onClick={onShare} />
  </IconContainer>
);

export default FolderActions;
