import '../styles/folder.css';
import SearchBar from './SearchBar';
import CardList from './CardList';

const Folder = ({ folderInfo }) => {
  return (
    <div className='folder'>
      <SearchBar />
      <CardList folderInfo={folderInfo} />
    </div>
  );
};

export default Folder;
