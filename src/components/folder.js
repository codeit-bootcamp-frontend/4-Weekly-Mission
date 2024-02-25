import '../styles/folder.css';
import CardList from './CardList';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';

const Folder = ({ folderInfo, categoryList }) => {
  return (
    <div className='folder-container'>
      <SearchBar />
      <CategoryList categoryList={categoryList} />
      <CardList folderInfo={folderInfo} isIconVisible={true} />
    </div>
  );
};

export default Folder;
