import AddSearchLink from '../common/AddSearchLink';
import './SearchTopBodyArea.css';

const SearchTopBodyArea = ({ folderListData }) => {
  return (
    <div className="search_top_area">
      <AddSearchLink folderList={folderListData} />
    </div>
  );
};

export default SearchTopBodyArea;
