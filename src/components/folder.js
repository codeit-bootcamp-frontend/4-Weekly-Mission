import '../styles/folder.css';
import CardList from './CardList';
import FolderList from './FolderList';
import SearchBar from './SearchBar';

const Folder = ({ folderInfo, folderList }) => {
  return (
    <div className='folder-container'>
      <SearchBar />
      <FolderList folderList={folderList} />
      <CardList folderInfo={folderInfo} isIconVisible={true} />
    </div>
  );
};

export default Folder;
