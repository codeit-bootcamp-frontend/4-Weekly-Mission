import '../styles/FolderContent.css';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

const FolderContent = ({ folderInfo }) => {
  return (
    <div className="folder-content">
      <SearchBar />
      <CardList folderInfo={folderInfo} />
    </div>
  );
}

export default FolderContent;
