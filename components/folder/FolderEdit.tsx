// client component
import FolderDelete from './edits/FolderDelete';
import FolderRename from './edits/FolderRename';
import FolderShare from './edits/FolderShare';

interface FolderNameProps {
  currentFolderName: null | string;
}

const FolderEdit = ({currentFolderName}: FolderNameProps) => {
  return (
    <div className='folder-edits'>
      <FolderShare currentFolderName={currentFolderName}/>
      <FolderRename />
      <FolderDelete currentFolderName={currentFolderName}/>
    </div>
  )
}

export default FolderEdit