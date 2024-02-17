import SortButton from './SortButton';
import '../styles/folderSortBar.css';
import FolderAddButton from './FolderAddButton';
import { USERS_FOLDERS_URL } from '../../../constants/urls';
import useFoldersData from '../../../hooks/useFoldersData';

function FolderSortBar() {
  const folders = useFoldersData(USERS_FOLDERS_URL);

  return (
    <div className="folder__sort-bar">
      <div className="folder__sort-bar--sort-buttons">
        {folders.map((folder) => (
          <SortButton key={folder.id} text={folder.name} />
        ))}
      </div>

      <FolderAddButton></FolderAddButton>
    </div>
  );
}
export default FolderSortBar;
