import '../styles/FolderContent.css';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

function FolderContent() {


  return (
    <div className="folder-content">
      <SearchBar />
      <CardList />
    </div>
  );
}

export default FolderContent;
