import SortButton from './SortButton';
import '../styles/folderSortBar.css';
import FolderAddButton from './FolderAddButton';

function FolderSortBar({ folders, handleClick, selectedId }) {
  return (
    <div className="folder__sort-bar">
      <div className="folder__sort-bar--sort-buttons">
        {folders.map((folder) => (
          <SortButton
            key={folder.id}
            id={folder.id}
            text={folder.name}
            handleClick={handleClick}
            isclickedProp={selectedId == folder.id ? true : false}
          />
        ))}
      </div>

      <FolderAddButton></FolderAddButton>
    </div>
  );
}
export default FolderSortBar;
