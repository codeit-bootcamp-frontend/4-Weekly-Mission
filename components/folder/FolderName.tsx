import FolderEdit from "./FolderEdit";

interface FolderNameProps {
  currentFolderName: null | string;
}

const FolderName = ({currentFolderName}: FolderNameProps) => {
  return (
    <div className='container-folder-edit'>
      <span>{currentFolderName}</span>
      {currentFolderName && <FolderEdit />}
    </div>
  )
}

export default FolderName