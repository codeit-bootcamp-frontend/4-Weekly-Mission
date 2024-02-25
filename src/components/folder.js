import '../styles/folder.css';
import CardList from './CardList';
import FolderList from './FolderList';
import SearchBar from './SearchBar';

const Folder = ({ folderInfo }) => {
  return (
    <div className='folder-container'>
      <SearchBar />
      <FolderList />
      <CardList folderInfo={folderInfo} isIconVisible={true} />
    </div>
  );
};

export default Folder;
