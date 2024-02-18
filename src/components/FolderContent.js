import '../styles/FolderContent.css';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

const FolderContent = ({ folderInfo }) => {
  return (
    <main className="folder-content">
      <SearchBar />
      <CardList folderInfo={folderInfo} />
    </main>
  );
}

export default FolderContent;
