import shareImg from '@/public/folder/share.svg';
import renameImg from '@/public/folder/pen.svg';
import deleteImg from '@/public/folder/delete.svg';

interface FolderEditProps {
  currentFolderName: string;
}

const FolderEdit = ({ currentFolderName }: FolderEditProps) => {
  return (
    <div className='container-folder-edit'>
          <span>{currentFolderName}</span>
          {/* <FolderEdit folderName={currentFolderName} /> */}
        </div>
  )
}

export default FolderEdit