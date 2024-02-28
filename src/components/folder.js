import '../styles/folder.css';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';

const Folder = ({ folderInfo, categoryList }) => {
  return (
    <div className='folder-container'>
      <SearchBar />
      <CategoryList folderInfo={folderInfo} categoryList={categoryList} />
    </div>
  );
};

export default Folder;
