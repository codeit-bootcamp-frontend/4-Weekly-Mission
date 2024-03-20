import FolderDelete from './edits/FolderDelete';
import FolderRename from './edits/FolderRename';
import FolderShare from './edits/FolderShare';

const FolderEdit = () => {
  return (
    <div className='folder-edits'>
      <FolderShare />
      <FolderRename />
      <FolderDelete />
    </div>
  )
}

export default FolderEdit