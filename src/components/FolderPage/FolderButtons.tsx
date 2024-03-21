import './FolderButtons.css';

interface FolderList {
  id: number;
  name: string;
}

interface FolderButtonsProps {
  folderList: FolderList[];
  handleFolderClick: (id?: number) => void;
  currentFolderName: string;
}

const FolderButtons = ({
  folderList,
  handleFolderClick,
  currentFolderName,
}: FolderButtonsProps) => (
  <>
    <button className='folderButton' onClick={() => handleFolderClick()}>
      전체
    </button>
    {folderList.map((folder) => (
      <button
        key={folder.id}
        className={
          currentFolderName === folder.name
            ? 'folderButton selected'
            : 'folderButton'
        }
        onClick={() => handleFolderClick(folder.id)}>
        {folder.name}
      </button>
    ))}
  </>
);

export default FolderButtons;
